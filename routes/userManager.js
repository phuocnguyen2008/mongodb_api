const express = require('express');
const authController = require('../app/controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);