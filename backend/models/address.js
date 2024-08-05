const { Schema, model } = require('mongoose');

const addressSchema = new Schema({
    fullName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    phoneNumber: {
        required: true,
        type: String,
    },
    fullAddress: {
        required: true,
        type: String,
    },
    addressOf: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    }
}, {
    timestamps: true,
})

const Address = model('address', addressSchema);

module.exports = Address;