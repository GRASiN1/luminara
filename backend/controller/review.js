const Review = require('../models/review');
const Product = require('../models/product');

async function handleCreateReview(req, res) {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.productId);
    if (product) {
        const reviewsOfTheProduct = await Review.find({ reviewOf: req.params.productId });

        const alreadyReviewed = reviewsOfTheProduct.find(
            (r) => r.reviewBy.toString() === req.user._id.toString()
        );
        if (alreadyReviewed) {
            return res.status(400).json({ message: 'Already reviewed by current user' });
        }
        await Review.create({
            reviewBy: req.user._id,
            reviewBody: comment,
            stars: rating,
            reviewOf: req.params.productId,
        })
        return res.status(200).json({ message: 'review added' });
    } else {
        return res.status(400).json({ message: 'No product by this id' });
    }
}

async function handleGetAllReViewsOfProduct(req, res) {
    const productId = req.params.productId;
    const reviewList = await Review.find({ reviewOf: productId });
    if (reviewList.length !== 0) {
        return res.status(200).json(reviewList);
    } else {
        return res.status(400).json({ message: 'No reviews on this product' });
    }
}

module.exports = {
    handleCreateReview,
    handleGetAllReViewsOfProduct
}