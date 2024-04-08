const express = require('express');
const router = express.Router();
const {
    getHomePage,
    getHelloWorld,
    postCreateUser,
    getCreatePage,
} = require('../controllers/homeController');

router.get('/', getHomePage);

router.get('/home', getHelloWorld);

router.get('/create', getCreatePage);

router.post('/create_user', postCreateUser);

module.exports = router;
