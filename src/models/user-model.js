const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      trim: true,
      unique: [true, "You have an account already. Please log in."],
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format!"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required!"],
      unique: [true, "This phone is used already."],
      match: [/^\d{10}$/, "Phone number must be 10 digits!"],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt
  }
);

module.exports = mongoose.model("User", userSchema);
