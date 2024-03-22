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
        console.log(error)
    }
}



module.exports = {
    createPost,
}
