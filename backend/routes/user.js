const { Router } = require('express');
const { handleCreateUser, handleUserLogin, handleGetProfile, } = require('../controller/user');
const { authenticateUser } = require('../middleware/authentication');
const { restrictTo } = require('../middleware/authorization');

const router = Router();

router.post('/createUser', restrictTo(['NORMAL']), handleCreateUser);
router.post('/loginUser', restrictTo(['NORMAL']), handleUserLogin);
router.get('/getUserDetails', authenticateUser, restrictTo(['NORMAL']), handleGetProfile);

module.exports = router;