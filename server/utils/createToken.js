const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

function generateToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    }

    const token = jwt.sign(payload, SECRET, { expiresIn: '12h' });
    return token;
}

module.exports = generateToken;