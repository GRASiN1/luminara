const { verifyToken } = require('../services/authentication');

function authenticateUser(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split('Bearer ')[1];
        const { user } = verifyToken(token);
        if (!user) return next();
        req.user = user;
    }
    return next();
}

module.exports = {
    authenticateUser,
}