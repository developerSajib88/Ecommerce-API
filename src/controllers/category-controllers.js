const Category = require("../models/category-model");

module.exports.getAllCategories = (req, res) => {};

module.exports.addCategory = async (req, res) => {
  try {
    const { name, isActive } = req.body;
    const category = await Category.create({
      name,
      image: req.file.filename,
      isActive,
    });

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    console.error("Error creating category:", error.message);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: Object.values(error.errors).map((err) => ({
          field: err.path,
          message: err.message,
        })),
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to create category",
      error: error.message,
    });
  }
};

module.exports.deleteCategory = (req, res) => {};
