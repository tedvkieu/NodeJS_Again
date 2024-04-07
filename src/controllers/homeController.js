const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
};
const getHelloWorld = (req, res) => {
    //MySQL
    connection.query('select * from users u', function (err, results, fields) {
        users = results;
        console.log('>>>results = ', results);

        console.log('>>>check user = ', users);
        res.send(JSON.stringify(users));
    });
};

const postCreateUser = (req, res) => {
    console.log(req.body);
    res.send('Create a new user');
};

module.exports = {
    getHomePage,
    getHelloWorld,
    postCreateUser,
};
