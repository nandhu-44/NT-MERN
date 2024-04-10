const login = require('./login');
const register = require('./register');
const forgotPassword = require('./forgotPassword');
const router = require('express').Router();

router.use('/login', login);
router.use('/register', register);
router.use('/forgot-password', forgotPassword);

module.exports = router;