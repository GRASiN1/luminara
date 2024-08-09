function restrictTo(roles = []) {
    return function (req, res, next) {
        if (!req.user) return res.redirect('/login');
        if (!roles.includes(req.user.role)) return res.end('UnAuthorized');
        return next();
    }
}

module.exports = {
    restrictTo,
}