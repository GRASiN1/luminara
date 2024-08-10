const Product = require('../models/product');

async function handleGetAllProducts(req, res) {
    const productsList = await Product.find({});
    if (!productsList) {
        res.status(404);
        throw new Error('No product in database');
    }
    return res.status(200).json({ productsList: productsList });
}

async function handleGetProductById(req, res) {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
        res.status(404);
        throw new Error('No product found by this id');
    }
    return res.status(200).json({ product: product });
}

module.exports = {
    handleGetAllProducts,
    handleGetProductById,
}