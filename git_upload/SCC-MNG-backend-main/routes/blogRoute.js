const express = require('express');
const router = express.Router();
const blogcontroller=require('../controllers/blogController');

router.post('/',blogcontroller.createBlog);
router.get('/', blogcontroller.getAllBlogs);
module.exports = router;