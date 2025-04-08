const express = require("express");
const {
  addCategory,
  deleteCategory,
  getAllCategories,
} = require("../controllers/category-controllers");
const uploadTo = require("../middlewares/upload-middleware");
const router = express.Router();

router.get("/all", getAllCategories);
router.post("/add", uploadTo("categories").single("image"), addCategory);
router.delete("/delete/:id", deleteCategory);

module.exports = router;
