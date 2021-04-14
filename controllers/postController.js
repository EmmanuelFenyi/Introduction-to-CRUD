const Post = require("../models/Post");

const getAllPost = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({ posts });
};
const getPost = async (req, res) => {
  res.send("Single Post");
};
const createPost = async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const post = await Post.create({ title, content });
  res.status(201).json({ post });
};

const updatePost = async (req, res) => {
  res.send("Update Post");
};
const deletePost = async (req, res) => {
  res.send("Delete Post");
};

module.exports = {
  getAllPost,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
