const { checkAuth } = require("../../utils/checkAuth");
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname)
  },
});

const upload = multer({storage})

const createUpload = (req, res) => {
  res.json({url: `/uploads/${req.file.originalname}`,});}
    
router.post('/api/upload', checkAuth, upload.single('image'), createUpload);

module.exports = router;