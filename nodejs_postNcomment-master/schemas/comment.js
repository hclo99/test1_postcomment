const mongoose = require("mongoose");
const Post = require("./post");
const commentsSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Comment", commentsSchema);
