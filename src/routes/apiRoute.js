const express = require('express');
const routerAPI = express.Router();

const {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUpdateUserAPI,
    postUploadSingleFileAPI,
    postUploadMultipleFileAPI,
} = require('../controllers/apiController');

const customerController = require('../controllers/customerController');

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

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUpdateUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);

routerAPI.post('/files', postUploadMultipleFileAPI);

// ----------------- Customer
routerAPI.post('/customers', customerController.postCreateCustomer);
routerAPI.post('/customers-many', customerController.postCreateArrayCustomer);

routerAPI.get('/customers', customerController.getAllCustomers);
routerAPI.put('/customers', customerController.putUpdateACustomer);

module.exports = routerAPI;
