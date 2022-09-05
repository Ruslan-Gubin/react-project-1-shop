const Stationery = require("../models/products");

const handleError = (res, error) => res.status(500).send(error.message);



const getStationery = async (req, res) => {
  await Stationery.find()
    .sort({ createdAt: -1 })
    .then((stationery) => res.status(200).json(stationery))
    .catch((error) => handleError(res, error));
};

const getOneStationery = async (req, res) => {
  await Stationery.findById(req.params.id)
    .then((stationery) => res.status(200).json(stationery))
    .catch((error) => handleError(res, error));
};

const deleteStationery = async (req, res) => {
  await Stationery.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error));
};

const editStationery = async (req, res) => {
  const { category, name, img, img2, img3, img4, img5, price, oldPrice } = req.body;
  const { id } = req.params;
  await Stationery.findByIdAndUpdate(
    id,
    { category, name, img, img2, img3, img4, img5, price, oldPrice },
    { new: true }
  )
    .then((elem) => res.status(200).json(elem))
    .catch((error) => handleError(res, error));
};

const addStationery = async (req, res) => {
  const { category, name, img, img2, img3, img4, img5, price, oldPrice } = req.body;
  const stationery = new Stationery({ category, name, img, img2, img3, img4, img5, price, oldPrice });
  await stationery
    .save()
    .then((stationery) => res.status(201).json(stationery))
    .catch((error) => handleError(res, error));
};

module.exports = {
  getStationery,
  getOneStationery,
  editStationery,
  deleteStationery,
  addStationery,
};
