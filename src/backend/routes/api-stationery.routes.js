const express = require("express");
const {
  getStationery,
  getOneStationery,
  addStationery,
  editStationery,
  deleteStationery,
} = require("../controllers/api-stationery.controlers");
const router = express.Router();


router.get("/api/stationery", getStationery);
router.get("/api/stationery/:id", getOneStationery);
router.post("/api/stationery", addStationery);
router.put("/api/stationery", editStationery);
router.delete("/api/stationery/:id", deleteStationery);

module.exports = router;
