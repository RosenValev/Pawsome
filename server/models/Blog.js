const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
    },
    subTitle: {
        type: String,
        required: [true, 'subTitle is required'],
    },
    imageUrl: {
        type: String,
        required: [true, 'imageUrl is required'],
        // match: [/^https?:\/\//, 'Invalid URL'],   
    },
    text: {
        type: String,
        required: [true, 'text is required'],
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    commentList: [{
        username: String,
        comment: String,
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;