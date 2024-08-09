const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET);
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    generateToken,
    verifyToken,
}