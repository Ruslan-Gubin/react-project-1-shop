const express = require("express");
const { checkAuth } = require("../../utils/checkAuth");
const { handleValidationErrors } = require("../../utils/handleValidationErrors");
const { apiAuthControllers: AC } = require("../controllers");
const { registerValedation, loginValedation } = require("../validations/authValudation");

const router = express.Router();

router.post("/api/register", registerValedation, handleValidationErrors, AC.createUser);
router.post("/api/login", loginValedation, handleValidationErrors, AC.authorization);
router.get("/api/auth", checkAuth, AC.getInforUsers);

module.exports = router; 
 