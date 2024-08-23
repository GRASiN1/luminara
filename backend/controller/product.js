const Product = require('../models/product');

async function handleGetAllProducts(req, res) {
    const productsList = await Product.find({});
    if (productsList.length === 0) {
        res.status(404).json({ message: 'No product in database' });
    }
    return res.status(200).json({ productsList: productsList });
}

async function handleGetProductById(req, res) {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
        res.status(404).json({ message: 'No product found by this id' });
    }
    return res.status(200).json({ product: product });
}

async function handleCreateProduct(req, res) {
    const { productName, productDescription,
        productPrice, productImage,
        category, countInStock } = req.body;

    const product = new Product({
        productName, productDescription,
        productPrice, productImage,
        category, countInStock
    })

    try {
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function handleDeleteProductById(req, res) {
    const id = req.params.id;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function handleUpdateProductById(req, res) {
    const id = req.params.id;
    const { productName, productDescription, productPrice, productImage, category, countInStock } = req.body;

    try {
        const product = await Product.findById(id);

        if (product) {
            product.productName = productName || product.productName;
            product.productDescription = productDescription || product.productDescription;
            product.productPrice = productPrice || product.productPrice;
            product.productImage = productImage || product.productImage;
            product.category = category || product.category;
            product.countInStock = countInStock || product.countInStock;

            const updatedProduct = await product.save();
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports = {
    handleGetAllProducts,
    handleGetProductById,
    handleCreateProduct,
    handleDeleteProductById,
    handleUpdateProductById,
}