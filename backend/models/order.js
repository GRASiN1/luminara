const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    orderId: {
        required: true,
        type: String,
    },
    orderedProduct: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'products',
    },
    deliveryAddress: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'address',
    },
    orderedBy: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    quantity: {
        required: true,
        type: Number,
    },
    deliveryStatus: {
        type: String,
    },
    paymentMethod: {
        required: true,
        type: String,
    },
    paymentResut: {
        id: {
            type: String,
        },
        status: {
            type: String,
            default: 'UNPAID'
        }
    }
}, {
    timestamps: true,
})

const Order = model('orders', orderSchema);

module.exports = Order;