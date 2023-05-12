const mongoose = require("mongoose");
const userModel = require("./userModel");
const shortid = require("shortid");
const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  paragraph: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  comment: {
    type: [],
  },
  slug: { type: String, unique: true, default: shortid.generate }
});

module.exports = Post = mongoose.model("post", postSchema);
