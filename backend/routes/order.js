const { Router } = require('express');
const { restrictTo } = require('../middleware/authorization')
const { hanldeGetUserOrder, handleCreateOrder, handleGetAllOrders, handleUpadteOrderStatus } = require("../controller/order");

const router = Router();

router.post('/createOrder', handleCreateOrder);
router.get('/getUserOrder', hanldeGetUserOrder);
router.get('/getAllOrders', restrictTo(['ADMIN']), handleGetAllOrders);
router.post('/updateOrderStatusById/:id', restrictTo(['ADMIN']), handleUpadteOrderStatus);

module.exports = router;