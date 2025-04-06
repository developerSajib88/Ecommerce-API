const express = require("express");
const {
  getallCategories,
  addCategory,
  deleteCategory,
} = require("../controllers/category-controllers");
const router = express.Router();

router.get("/all", getallCategories);
router.post("/add", addCategory);
router.delete("/delete/:id", deleteCategory);

module.exports = router;
