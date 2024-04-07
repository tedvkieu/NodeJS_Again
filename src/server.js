require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/webRoute');
const connection = require('./config/database');

//Config
configViewEngine(app);

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE
app.use('/', webRouter);
app.use('/home', webRouter);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}, host ${hostname}`);
});
