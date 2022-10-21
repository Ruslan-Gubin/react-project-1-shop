const express = require("express");
const { apiProductsControllers: AC } = require("../controllers");
const router = express.Router();


router.get("/api/products", AC.getProducts);
router.get("/api/products/:id", AC.getOneProduct);
router.post("/api/products", AC.addProduct);
router.put("/api/products", AC.editProduct);
router.delete("/api/products/:id", AC.deleteProduct);

module.exports = router;
