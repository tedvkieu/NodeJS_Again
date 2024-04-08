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

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let [results, fields] = await connection.query(
        `INSERT into Users (email, name, city) values (?,?,?)`,
        [email, name, city]
    );
    console.log('check results = ', results);
    res.send('create user success');
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

module.exports = {
    getHomePage,
    getHelloWorld,
    postCreateUser,
    getCreatePage,
};
