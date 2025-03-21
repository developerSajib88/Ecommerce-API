const express = require("express");
const productControllers = require("../controllers/product-controllers");
const router = express.Router();

router.get("/all", productControllers.getAllProducts);
router.get("/:id", productControllers.getProductById);
router.get("/search", productControllers.searchProduct);
router.get("/filter", productControllers.filterProduct);
router.post("/add", productControllers.createProduct);
router.put("/update/:id", productControllers.updateProduct);
router.delete("/delete/:id", productControllers.deleteProduct);

module.exports = router;