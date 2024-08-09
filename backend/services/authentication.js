const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
    return jwt.sign({ user }, secret);
}

const verifyToken = (token) => {
    return jwt.verify(token, secret);
}

module.exports = {
    generateToken,
    verifyToken,
}