const jwt = require('./jwt.js')

module.exports = async (req, res, next) => {
    const token = req.cookies.auth;
    // const token = req.headers.auth;
    try {
        const data = await jwt.verifyToken(token);
        req.user = data;
        req.isLogged = true;
    } catch (err) {
        res.clearCookie('auth');
        return res.status(401).json({ message: 'Invalid token!' });
    }
    next();
};