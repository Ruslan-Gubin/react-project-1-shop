const Post = require("../models/post");

const handleError = (res, error, text) => res.status(500).send({ error, text });

const createPost = async (req, res) => {
  const { title, text, imageUrl, tags } = req.body;
  const user = req.userId; //get user _id
  const newPost = new Post({ title, text, imageUrl, tags, user });

  await newPost
    .save()
    .then((post) => res.status(201).json(post))
    .catch((error) => handleError(res, error, "Не удалось создать статью"));
};

const getAllPosts = async (req, res) => {
  await Post.find()
    .populate("user")
    .exec()
    // .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((error) => handleError(res, error, "Не удалось найти статьи"));
};

const getOnePost = async (req, res) => {
  const postId = req.params.id;

  Post.findOneAndUpdate(
    { _id: postId },
    { $inc: { viewsCount: 1 } },
    { returnDocument: "after" },
    (err, doc) => {
      if (err) return handleError(res, err, "Не удалось вернуть статьи");
      if (!doc) return handleError(res, err, "Статья не найдена");

      res.json(doc);
    }
  );
};

const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error, "Не удалось удалить статью"));
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    await Post.updateOne(
      { _id: postId },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        user: req.userId,
        tags: req.body.tags,
      }
    );
    res.json({ success: true });
  } catch (error) {
    handleError(res, error, "Не удалось обновить статью");
  }
};

const getLastTags = async (req, res) => {
  try {
    const posts = await Post.find().limit(5).exec();
    const tags = posts
      .map((obj) => obj.tags)
      .flat()
      .slice(0, 5);

    res.json(tags);
  } catch (error) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить статью",
    });
  }
};

module.exports = {
  getLastTags,
  updatePost,
  createPost,
  getOnePost,
  deletePost,
  getAllPosts,
};
