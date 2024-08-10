function restrictTo(roles = []) {
    return function (req, res, next) {
        if (!req.user) return res.status(400).json({ message: 'unAuthorized' });
        if (!roles.includes(req.user.role)) return res.status(400).json({ message: 'unAuthorized' });
        return next();
    }
}

module.exports = {
    restrictTo,
}