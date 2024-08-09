const { verifyToken } = require('../services/authentication');
const User = require('../models/user');

async function authenticateUser(req, res, next) {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        try {
            token = req.headers.authorization.split('Bearer ')[1];

            const { user } = verifyToken(token);
            req.user = await User.findById(user._id).select('-password');
            return next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
}

module.exports = {
    authenticateUser,
}