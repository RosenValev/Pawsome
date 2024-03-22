const Blog = require('../models/Blog.js');
const jwt = require('../utils/jwt.js');


const createBlogPost = async (req, res) => {
    try {
        const { title, subTitle, imageUrl, text, token } = req.body
        if (!title || !subTitle || !imageUrl || !text || !token) {
            return res.status(400).json({ message: `All fields are required!` });
        }
        const decodedToken = await jwt.verifyToken(token);
        const createdPost = await Blog.create({ title, subTitle, imageUrl, text, owner: decodedToken.id });
        res.status(200).json(createdPost)

    } catch (error) {
        next(error)
    }
}

const getAllBlogPosts = async (req, res) => {
    try {
        const AllPosts = await Blog.find().populate('owner');
        if (!AllPosts) {
            return res.status(404).json({ message: 'Posts not found' })
        }
        res.status(200).json(AllPosts)
    } catch (error) {
        next(error)
    }
}

const getBlogPostById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).json({ message: `Id is required` });
        }
        const blogPost = await Blog.findById(id).populate('owner');
        if (!blogPost) {
            return res.status(404).json({ message: `Blog not found` });
        }
        res.status(200).json(blogPost);
    } catch (error) {
        next(error)
    }
}



module.exports = {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostById
}