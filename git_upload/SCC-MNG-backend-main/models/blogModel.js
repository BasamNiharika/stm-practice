const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['Published','Progress', 'Draft'],
    default: 'Draft',
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  tags: {
    type: [String],
  },
}, { timestamps: true });

const BlogPosts = mongoose.model('BlogPostss', blogPostSchema);

module.exports = BlogPosts;
