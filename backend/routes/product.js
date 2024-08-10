const { Router } = require('express');

const router = Router();

router.post('/createProduct', restrictTo(['ADMIN']),);
router.post('/updateProductById/:id', restrictTo(['ADMIN']),);
router.delete('/deleteProductById/:id', restrictTo(['ADMIN']),);
router.get('/getAllProducts', restrictTo(['NORMAL', 'ADMIN']),);
router.get('/getProductById/:id', restrictTo(['NORMAL', 'ADMIN']),);

module.exports = router;