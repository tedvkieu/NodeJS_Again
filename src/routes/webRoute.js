const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world!');
});

router.get('/home', (req, res) => {
    res.render('samples.ejs');
});

module.exports = router;
