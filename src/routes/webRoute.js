const express = require('express');
const router = express.Router();
const {
    getHomePage,
    getHelloWorld,
    postCreateUser,
    postUpdateUser,
    getCreatePage,
    getUpdatePage,
} = require('../controllers/homeController');

router.get('/', getHomePage);

router.get('/home', getHelloWorld);

router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);

router.post('/create_user', postCreateUser);

router.post('/update_user', postUpdateUser);

module.exports = router;
