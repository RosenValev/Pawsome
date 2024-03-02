const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'hoptrop';

function generateToken(data) {
    const token = jwt.sign(data, SECRET, { expiresIn: '12h' });
    return token;
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

module.exports = { generateToken, verifyToken };