const express = require("express");
const categoryControllers = require("../controllers/category-controllers");
const router = express.Router();

router.get("/all", categoryControllers.getAllCategories);
router.post("/add", categoryControllers.addCategory);
router.delete("/delete/:id", categoryControllers.deleteCategory);

module.exports = router;