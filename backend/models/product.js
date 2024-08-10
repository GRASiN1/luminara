const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

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

productSchema.pre('save', function (next) {
    if (!this.productId) {
        this.productId = uuidv4();
    }
    next();
});

const Product = model('products', productSchema);

module.exports = Product;