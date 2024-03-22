const blogRouter = require('express').Router();
const blogController = require('../controllers/blog.js');
const authMiddleware = require('../utils/authMiddleware.js');

blogRouter.get('/', blogController.getAllBlogPosts);
blogRouter.post('/create', authMiddleware, blogController.createPost);

module.exports = blogRouter;