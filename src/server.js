require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/webRoute');

configViewEngine(app);
// ROUTE
app.use('/', webRouter);
app.use('/home', webRouter);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}, host ${hostname}`);
});
