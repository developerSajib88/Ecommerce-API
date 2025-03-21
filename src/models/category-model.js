const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Category name is required"],
            unique: true,
            trim: true,
            minlength: [3, "Category name must be at least 3 characters"],
            maxlength: [50, "Category name cannot exceed 50 characters"]
        }, 
        image: {
            type: String,
            required: [true, "Category image is required"],
            trim: true,
            validate: {
                validator: function (value) {
                    return /^https?:\/\/.+\.(jpg|jpeg|png)$/.test(value);
                },
                message: "Please provide a valid image URL (jpg, jpeg, png)"
            }
        },
        isActive: {
            type: Boolean,
            default: true, // Defaults to true if not provided
        }     
    },
    { timestamps: true } // Automatically adds createdAt & updatedAt
);

module.exports = mongoose.model("Category", categorySchema);
