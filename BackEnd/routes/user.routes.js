const express = require('express');
const userCtrl = require('../controllers/user.controllers');
const auth = require('../middleware/auth')
const router = express.Router();

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


module.exports = router;