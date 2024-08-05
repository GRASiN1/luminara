const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    fullName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        type: String,
    },
}, {
    timestamps: true,
})

const User = model('users', userSchema);

module.exports = User;