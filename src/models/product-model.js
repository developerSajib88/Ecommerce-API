const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: { type: String, required: [true, "User is required"] },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating cannot exceed 5"],
  },
  comment: { type: String, required: [true, "Comment is required"] },
});

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Product name is required"] },
    description: { type: String, required: [true, "Description is required"] },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [10, "Price must be at least 10"],
    },
    currency: {
      type: String,
      default: "USD",
      enum: {
        values: ["USD", "EUR", "GBP"],
        message: "Currency must be USD, EUR, GBP",
      },
    },
    availability: {
      type: String,
      default: "In Stock",
      enum: {
        values: ["In Stock", "Out of Stock", "Preorder"],
        message: "Availability must be In Stock, Out of Stock, or Preorder",
      },
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      validate: {
        validator: async function (value) {
          const categoryExists = await mongoose
            .model("Category")
            .exists({ name: value });
          return categoryExists;
        },
        message: "Category does not exist",
      },
    },
    brand: { type: String, required: [true, "Brand is required"] },
    rating: {
      type: Number,
      min: [0, "Rating cannot be negative"],
      max: [5, "Rating cannot exceed 5"],
    },
    reviews: [reviewSchema],
    images: {
      type: [String],
      validate: [arrayLimit, "Must have at least one image"],
    },
    tags: {
      type: [String],
      validate: [arrayLimit, "Must have at least one tag"],
    },
    discount: {
      type: {
        type: String,
        enum: {
          values: ["percentage", "fixed"],
          message: "Discount type must be percentage or fixed",
        },
      },
      value: { type: Number, min: [0, "Discount value must be at least 0"] },
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt
  }
);

function arrayLimit(val) {
  return val.length > 0;
}

module.exports = mongoose.model("Product", productSchema);
