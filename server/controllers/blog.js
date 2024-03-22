const Blog = require('../models/Blog.js');
const jwt = require('../utils/jwt.js');


const createPost = async (req, res) => {
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



module.exports = {
    createPost,
    getAllBlogPosts
}
