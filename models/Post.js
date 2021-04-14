const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide the title for the post."],
  },
  content: {
    type: String,
    required: [true, "Please provide the content for the post."],
  },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Post", postSchema)
