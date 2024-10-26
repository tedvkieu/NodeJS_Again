require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/webRoute');
const apiRouter = require('./routes/apiRoute');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');

const { MongoClient } = require('mongodb');
//Config
configViewEngine(app);

app.use(fileUpload());
//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE
app.use('/', webRouter);
app.use('/v1/api/', apiRouter);

const url = process.env.DB_HOST_WITH_DRIVER;
const client = new MongoClient(url);
const dbName = process.env.DB_NAME;

(async () => {
    try {
        //await connection();

        // using mongo db driver
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);
        const dbName = process.env.DB_NAME;

        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection('customers');

        let a = await collection.findOne({ address: 'hanoi' });
        console.log('file = ', a);

        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.log('>>> Error connect to DB', error);
    }
})();
