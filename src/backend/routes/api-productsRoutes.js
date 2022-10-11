const express = require("express");
const {
  getProducts,
  getOneProduct,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/api-products-controlers");
const router = express.Router();


router.get("/api/products", getProducts);
router.get("/api/products/:id", getOneProduct);
router.post("/api/products", addProduct);
router.put("/api/products", editProduct);
router.delete("/api/products/:id", deleteProduct);

module.exports = router;
