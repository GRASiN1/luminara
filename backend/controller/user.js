const User = require('../models/user');
const { generateToken } = require('../services/authentication');

async function handleCreateUser(req, res) {
    const { fullName, email, password } = req.body;
    const userExists = await User.findOne({ email: email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        fullName,
        email,
        password,
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.fullName,
            email: user.email,
            token: generateToken({
                fullName: user.fullName,
                email: user.email,
                _id: user._id,
                role: user.role,
            }),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user && user.matchPassword(password)) {
        return res.json({
            _id: user._id,
            name: user.fullName,
            email: user.email,
            token: generateToken({
                fullName: user.fullName,
                email: user.email,
                _id: user._id,
                role: user.role,
            }),
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
}

async function handleGetProfile(req, res) {
    const user = await User.findById({ _id: req.user._id });
    if (user) {
        res.json({
            _id: user._id,
            name: user.fullName,
            email: user.email,
            role: user.role,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
}

module.exports = {
    handleCreateUser,
    handleGetProfile,
    handleUserLogin,
}