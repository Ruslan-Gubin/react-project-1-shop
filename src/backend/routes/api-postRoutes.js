const { handleValidationErrors } = require("../../utils/handleValidationErrors");
const { postCreateValedation } = require("../validations/postValidation");
const { apiPostControllers: AC } = require("../controllers");
const { checkAuth } = require("../../utils/checkAuth");
const express = require("express");
const router = express.Router();

router.patch("/api/post/:id", checkAuth, postCreateValedation, handleValidationErrors,AC.updatePost);
router.post("/api/post", checkAuth, postCreateValedation, handleValidationErrors, AC.createPost);
router.delete("/api/post/:id", checkAuth, AC.deletePost);
router.get("/api/post/:id", AC.getOnePost);
router.get("/api/post", AC.getAllPosts); 
router.get("/api/tags", AC.getLastTags); 

module.exports = router;
