const { Router } = require('express');
const { handleCreateUser, handleUserLogin, handleGetProfile, } = require('../controller/user');
const { authenticateUser } = require('../middleware/authentication');

const router = Router();

router.post('/createUser', handleCreateUser);
router.post('/loginUser', handleUserLogin);
router.get('/getUserDetails', authenticateUser, handleGetProfile);

module.exports = router;