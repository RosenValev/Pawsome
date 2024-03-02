const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    // const token = req.cookies.token;
    const token = req.headers.auth;

    try {
        const data = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = data;
    } catch (err) {
        // res.clearCookie(token);
        return res.status(403).json({ message: 'Invalid token!' });
    }
    next();
};