const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDservices');

const getHomePage = async (req, res) => {
    let rs = await getAllUsers();
    return res.render('home.ejs', { listUsers: rs });
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

const getUpdatePage = (req, res) => {
    const userId = req.params.id;
    res.render('edit.ejs');
};

module.exports = {
    getHomePage,
    getHelloWorld,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
};
