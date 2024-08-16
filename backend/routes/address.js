const { Router } = require('express');
const { handleCreateAddress, handleUpdateAddressById, handleGetAllAddressOfUser, handleDeleteAddressById } = require('../controller/address');

const router = Router();

router.post('/createAddress', handleCreateAddress);
router.post('/updateAddressById/:id', handleUpdateAddressById);
router.get('/getAllAddressOfUser', handleGetAllAddressOfUser);
router.delete('/deleteAddressById/:id', handleDeleteAddressById);

module.exports = router;