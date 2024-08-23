const Order = require('../models/order');
const { v4: uuidv4 } = require('uuid');

async function handleCreateOrder(req, res) {
    const { orderedProduct, deliveryAddress, quantity, paymentMethod } = req.body;

    if (!orderedProduct || !deliveryAddress || !quantity || !paymentMethod) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newOrder = new Order({
            orderId: uuidv4(),
            orderedProduct,
            deliveryAddress,
            orderedBy: req.user._id,
            quantity,
            paymentMethod,
            paymentResut: {
                status: 'UNPAID'
            },
            deliveryStatus: 'Pending'
        });

        const createdOrder = await newOrder.save();
        res.status(201).json(createdOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function hanldeGetUserOrder(req, res) {
    const userId = req.user._id;

    try {
        const userOrders = await Order.find({ orderedBy: userId })
            .populate('orderedProduct', 'productName')
            .populate('deliveryAddress');

        if (userOrders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }

        res.status(200).json(userOrders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function handleGetAllOrders(req, res) {
    try {
        const orders = await Order.find({})
            .populate('orderedProduct', 'productName')
            .populate('deliveryAddress')
            .populate('orderedBy', 'name');

        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found' });
        }

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function handleUpadteOrderStatus(req, res) {
    const orderId = req.params.id;
    const { deliveryStatus } = req.body;

    if (!deliveryStatus) {
        return res.status(400).json({ message: 'Delivery status is required' });
    }

    try {
        const order = await Order.findOne({ orderId });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.deliveryStatus = deliveryStatus;

        const updatedOrder = await order.save();
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    handleCreateOrder,
    handleGetAllOrders,
    hanldeGetUserOrder,
    handleUpadteOrderStatus
}