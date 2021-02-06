const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.post('/regist', authController.regist);

module.exports = router;
