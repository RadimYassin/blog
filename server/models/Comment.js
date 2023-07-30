// models/comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  // You can add other properties specific to your Comment model here
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  dateC:{
    type: Date, default: Date.now
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
