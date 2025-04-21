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
const uploadTo = require("../middlewares/upload-middleware");
const router = express.Router();

router.get("/all", getAllProducts);
router.get("/:id", getProductById);
router.get("/search", searchProduct);
router.get("/filter", filterProduct);
router.post("/add", uploadTo("products").array("images", 3), createProduct);
router.put(
  "/update/:id",
  uploadTo("products").array("images", 3),
  updateProduct
);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
