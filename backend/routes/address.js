const { Router } = require('express');
const { handleCreateAddress, handleUpdateAddressById, handleGetAllAddressOfUser } = require('../controller/address');

const router = Router();

router.post('/createAddress', handleCreateAddress);
router.post('/updateAddressById/:id', handleUpdateAddressById);
router.get('/getAllAddressOfUser', handleGetAllAddressOfUser);

module.exports = router;