const express = require('express');
const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI } = require('../controllers/apiController');

routerAPI.get('/', (req, res) => {
    res.send('hello world api');
});

routerAPI.get('/abc', (req, res) => {
    res.status(201).json({
        data: 'hello world first api',
    });
});

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUserAPI);

module.exports = routerAPI;
