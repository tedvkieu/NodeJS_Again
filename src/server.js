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
const mongoose = require('mongoose');

//Config
configViewEngine(app);

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE
app.use('/', webRouter);

const kittySchema = new mongoose.Schema({
    name: String,
});
const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'Kieu ne cac ban' });
cat.save();

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.log('>>> Error connect to DB', error);
    }
})();
