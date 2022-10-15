const express = require('express');
const { getAllPosts, addPost, deletePost, getOnePost } = require('../controllers/api-post-controlers');
const router = express.Router();

router.get('/api/post', getAllPosts);
router.get('/api/post/:id', getOnePost);
router.post('/api/post', addPost);
router.delete('/api/post/:id', deletePost);

module.exports = router;