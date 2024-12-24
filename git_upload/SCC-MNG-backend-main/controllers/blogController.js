const blogservice=require('../services/blogService');
const blogModel=require('../models/blogModel');

exports.createBlog = async (req, res) => {
    try {
      const blog = await blogservice.createBlog(req.body);
      res.status(201).json({ message: 'Blog created successfully', blog });
    } catch (err) {
      res.status(400).json({ message: 'Error while creating blog', error: err.message });
    }
  };

  exports.getAllBlogs = async (req, res) => {
    try {
      const blog = await blogservice.getAllBlogs();
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching Blogs', error: err.message });
    }
  };