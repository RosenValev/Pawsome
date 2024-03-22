const User = require('../models/User.js');
const jwt = require('../utils/jwt.js');
const bcrypt = require('bcrypt');
const bsonToJson = (data) => { return JSON.parse(JSON.stringify(data)) };
const removePassword = (data) => {
    const { password, repeatPassword, __v, ...userData } = data;
    return userData
}

const register = async (req, res, next) => {
    const { username, email, password, repeatPassword } = req.body;
    try {
        const duplicatedEmail = await User.findOne({ email });
        if (duplicatedEmail) {
            return res.status(409).json({ message: `Email ${email} already in use` });
        }

        let createdUser = await User.create({ username, email, password, repeatPassword })
        createdUser = bsonToJson(createdUser);
        createdUser = removePassword(createdUser);

        // const token = jwt.generateToken({ id: createdUser._id });
        // if (process.env.NODE_ENV === 'production') {
        //     res.cookie('auth', token, { httpOnly: true, sameSite: 'none', secure: true })
        // } else {
        //     res.cookie('auth', token, { httpOnly: true })
        // }
        res.status(200).send(createdUser);

    } catch (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            let field = err.message.split("index: ")[1];
            field = field.split(" dup key")[0];
            field = field.substring(0, field.lastIndexOf("_"));
            res.status(409).send({ message: `This ${field} is already registered!` });
            return;
        }
        next(err);
    }
}


const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email or password don't match!" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Email or password don't match!" });
        }

        user = bsonToJson(user);
        user = removePassword(user);
        const token = jwt.generateToken({ id: user._id });
        user = { ...user, token };

        // if (process.env.NODE_ENV === 'production') {
        //     res.cookie('auth', token, { httpOnly: true, sameSite: 'none', secure: true })
        // } else {
        //     res.cookie('auth', token, { httpOnly: true, sameSite: 'lax', secure: false })
        // }
        res.status(200).send(user);
    } catch (err) {
        next(err);
    }
}

const logout = async (req, res) => {
    // const token = req.cookies.auth;
    try {
        res.clearCookie('auth');
        res.status(200).json({ message: 'Logged out!' });
    } catch (err) {
        next(err);
    }
}


module.exports = {
    login,
    register,
    logout,
}

