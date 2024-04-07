const express = require('express');
const router = express.Router();
const {
    getHomePage,
    getHelloWorld,
    postCreateUser,
} = require('../controllers/homeController');

router.get('/', getHelloWorld);

router.get('/home', getHomePage);

router.post('/create_user', postCreateUser);

module.exports = router;
