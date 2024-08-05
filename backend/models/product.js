const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    productName: {
        required: true,
        type: String,
    },
    productDescription: {
        required: true,
        type: String,
    },
    productPrice: {
        required: true,
        type: String,
    },
    productId: {
        required: true,
        type: String,
        unique: true,
    },
    productImage: {
        required: true,
        type: String,
    },
    category: {
        required: true,
        type: String,
    },
    countInStock: {
        required: true,
        type: Number,
    }
}, {
    timestamps: true,
})

const Product = model('products', productSchema);

module.exports = Product;