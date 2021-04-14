// const express = require("express");
// const router = express.Router();

// OR

const router = require("express").Router();
const postController = require("../controllers/postController");

//REST API CRUD ((C)Create, (R)Read, (U)Update, (D)Delete)
router.get("/", postController.getAllPost);
router.get("/:id", postController.getPost);
router.post("/", postController.createPost);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;
