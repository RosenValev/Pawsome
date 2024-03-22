const blogRouter = require('express').Router();
const blogController = require('../controllers/blog.js');
const authMiddleware = require('../utils/authMiddleware.js');

blogRouter.get('/', blogController.getAllBlogPosts);
blogRouter.get('/:id', blogController.getBlogPostById);
blogRouter.post('/create', authMiddleware, blogController.createBlogPost);

module.exports = blogRouter;