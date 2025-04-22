const Product = require("../models/product-model");

module.exports.addReview = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const { user, rating, comment } = req.body;

    // Validate input
    if (!user || rating == null || !comment) {
      return res.status(400).json({
        success: false,
        message: "User, rating, and comment are all required.",
      });
    }

    // Find product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    // Add new review
    product.reviews.push({ user, rating, comment });

    // Update average rating
    const totalRating = product.reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    product.rating = totalRating / product.reviews.length;

    await product.save();

    return res.status(201).json({
      success: true,
      message: "Review added successfully.",
      data: product,
    });
  } catch (error) {
    console.error("Error adding review:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while adding the review.",
    });
  }
};
