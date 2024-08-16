const { Router } = require('express');
const { handleCreateReview, handleGetAllReViewsOfProduct } = require('../controller/review');

const router = Router();

router.post('/createReview/:productId', handleCreateReview);
router.get('/getAllReviewsOfProduct/:productId', handleGetAllReViewsOfProduct);

module.exports = router;