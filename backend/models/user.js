const { Schema, model } = require('mongoose');
const { genSalt, hash, compare } = require('bcryptjs');

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
    role: {
        type: String,
        default: 'NORMAL',
    }
}, {
    timestamps: true,
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await compare(enteredPassword, this.password);
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await genSalt(5);
    const hashedPassword = await hash(this.password, salt);

    this.password = hashedPassword;
})

const User = model('users', userSchema);

module.exports = User;