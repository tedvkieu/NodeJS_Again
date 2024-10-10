require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/webRoute');
const apiRouter = require('./routes/apiRoute');
const connection = require('./config/database');

//Config
configViewEngine(app);

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE
app.use('/', webRouter);
app.use('/v1/api/', apiRouter);

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
