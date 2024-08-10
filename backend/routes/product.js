const { Router } = require('express');
const { handleGetAllProducts, handleGetProductById, handleCreateProduct, handleUpdateProductById, handleDeleteProductById } = require('../controller/product');
const { restrictTo } = require('../middleware/authorization');

const router = Router();

router.post('/createProduct', restrictTo(['ADMIN']), handleCreateProduct);
router.post('/updateProductById/:id', restrictTo(['ADMIN']), handleUpdateProductById);
router.delete('/deleteProductById/:id', restrictTo(['ADMIN']), handleDeleteProductById);
router.get('/getAllProducts', restrictTo(['NORMAL', 'ADMIN']), handleGetAllProducts);
router.get('/getProductById/:id', restrictTo(['NORMAL', 'ADMIN']), handleGetProductById);

module.exports = router;