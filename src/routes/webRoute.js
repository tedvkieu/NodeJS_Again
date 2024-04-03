const express = require('express');
const router = express.Router();
const { getHomePage, getHelloWorld } = require('../controllers/homeController');

router.get('/', getHelloWorld);

router.get('/home', getHomePage);

module.exports = router;
