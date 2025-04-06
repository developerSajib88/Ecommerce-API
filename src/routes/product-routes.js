const express = require("express");
const {
  getAllProducts,
  getProductById,
  searchProduct,
  filterProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product-controllers");
const router = express.Router();

router.get("/all", getAllProducts);
router.get("/:id", getProductById);
router.get("/search", searchProduct);
router.get("/filter", filterProduct);
router.post("/add", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
