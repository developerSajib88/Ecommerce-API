const Product = require("../models/product-model");
const { options } = require("../routes/product-routes");

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Products retrieved successfully.",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while retrieving products.",
      error: error.message,
    });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product retrieved successfully.",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the product.",
      error: error.message,
    });
  }
};

module.exports.searchProduct = async (req, res) => {
  try {
    const { search } = req.query;

    if (!search) {
      return res.status(400).json({
        success: false,
        message: "Search query parameter is required.",
      });
    }

    const products = await Product.find({
      name: { $regex: search, $options: "i" },
    }).sort({ createdAt: -1 }); // Latest products first

    return res.status(200).json({
      success: true,
      message: "Products retrieved successfully.",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while searching for products.",
      error: error.message,
    });
  }
};

module.exports.filterProduct = async (req, res) => {
  try {
    const {
      brand,
      category,
      minPrice,
      maxPrice,
      minRating,
      maxRating,
      availability,
    } = req.query;

    const filter = {};

    if (brand) filter.brand = brand.trim();
    if (category) filter.category = category.trim();
    if (availability) filter.availability = availability.trim();

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }

    if (minRating || maxRating) {
      filter.rating = {};
      if (minRating) fliter.rating.$gte = parseFloat(minRating);
      if (maxRating) filter.rating.$lte = parseFloat(maxRating);
    }

    const filteredProducts = await Product.find(filter);

    return res.status(200).json({
      success: true,
      message: "Filter applied successfully.",
      data: filteredProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while filtering the products.",
      error: error.message,
    });
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    const productData = { ...req.body };

    // Handle uploaded images
    if (Array.isArray(req.files) && req.files.length > 0) {
      productData.images = req.files.map((file) => file.filename);
    }

    const product = new Product(productData);
    await product.save(); // no need for .validate(), save() does it

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.error("Error creating product:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

module.exports.updateProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const productData = { ...req.body };

    if (Array.isArray(req.files) && req.files.length > 0) {
      productData.images = req.files.map((file) => file.filename);
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      productData,
      {
        new: true, // Return the updated product
        runValidators: true, // Ensure schema validation
      }
    );

    // Check if product was found and updated
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);

    // Return error response
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the product.",
      error: error.message,
    });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the product.",
      error: error.message,
    });
  }
};
