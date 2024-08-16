const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    reviewBy: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    reviewBody: {
        required: true,
        type: String,
    },
    stars: {
        required: true,
        type: Number,
        min: 0,
        max: 5,
    },
    reviewOf: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'products',
    }
}, {
    timestamps: true,
})

const Review = model('reviews', reviewSchema);

module.exports = Review;