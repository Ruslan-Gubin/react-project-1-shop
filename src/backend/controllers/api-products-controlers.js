const Products = require("../models/products");

const handleError = (res, error) => res.status(500).send(error.message);



const getProducts = async (req, res) => {
  await Products.find()
    .sort({ createdAt: -1 })
    .then((product) => res.status(200).json(product))
    .catch((error) => handleError(res, error));
};

const getOneProduct = async (req, res) => {
  await Products.findById(req.params.id)
    .then((product) => res.status(200).json(product))
    .catch((error) => handleError(res, error));
};

const deleteProduct = async (req, res) => {
  await Products.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error));
};

const editProduct = async (req, res) => {
  const { category, description, title, img, img2, img3, img4, img5, price, oldPrice, quantity, department } = req.body;
  const { id } = req.params;
  await Products.findByIdAndUpdate(
    
    { id,  category, title, description, img, img2, img3, img4, img5, price, oldPrice, quantity, department },
    { new: true }
  )
    .then((elem) => res.status(200).json(elem))
    .catch((error) => handleError(res, error));
};

const addProduct = async (req, res) => {
  const { category, title, description, img, img2, img3, img4, img5, price, oldPrice, quantity, department } = req.body;
  const product = new Products({ category, title, description, img, img2, img3, img4, img5, price, oldPrice, quantity, department });
  await product
    .save()
    .then((product) => res.status(201).json(product))
    .catch((error) => handleError(res, error));
};

module.exports = {
  getProducts,
  getOneProduct,
  addProduct,
  editProduct,
  deleteProduct,
};
