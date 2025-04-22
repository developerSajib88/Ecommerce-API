const Product = require("../models/product-model");

module.exports.addReview = async (req, res) => {
  try {
    const productId = req.params.id;
    const { user, rating, comment } = req.body;
    if (!user || !rating || !comment) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const product = await Product.findById(productId);
    product.reviews.push({ user, rating, comment });

    await product.save();
    return res.json({
      success: true,
      message: "Review Added.",
      data: product,
    });
  } catch (error) {}
};
