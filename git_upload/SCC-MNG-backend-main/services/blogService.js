const blogModel=require('../models/blogModel');

exports.createBlog = async (data) => {
    const blogmodel = new blogModel(data);
    return await blogmodel.save();
  };

  exports.getAllBlogs = async () => {
    return await blogModel.find();//.populate('trainers', 'name email');
  };

  