const blogRouter = require('express').Router();
const blogController = require('../controllers/blog.js');
const authMiddleware = require('../utils/authMiddleware.js');

blogRouter.get('/', blogController.getAllBlogPosts);
blogRouter.get('/last-three', blogController.getLastThreeBlogPosts);
blogRouter.get('/:id', blogController.getBlogPostById);
blogRouter.get('/:id/own-posts', blogController.getPersonalBlogPostsById);
blogRouter.post('/create', authMiddleware, blogController.createBlogPost);
blogRouter.put('/:id/edit', blogController.editBlogPostById);
blogRouter.delete('/:id/delete', blogController.deleteBlogPostById);

module.exports = blogRouter;