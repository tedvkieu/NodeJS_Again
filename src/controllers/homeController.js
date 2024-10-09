const connection = require('../config/database');
const {
    getAllUsers,
    getUserByID,
    updateUserById,
    deleteUserById,
} = require('../services/CRUDservices');
const User = require('../models/user');

const getHomePage = async (req, res) => {
    //let rs = await getAllUsers();
    let rs = await User.find({});
    return res.render('home.ejs', { listUsers: rs });
};
const getHelloWorld = (req, res) => {
    //MySQL
    // connection.query('select * from users u', function (err, results, fields) {
    //     users = results;
    //     console.log('>>>results = ', results);
    //     console.log('>>>check user = ', users);
    //     res.send(JSON.stringify(users));
    // });
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    //---------------My sql
    // let [results, fields] = await connection.query(
    //     `INSERT into Users (email, name, city) values (?,?,?)`,
    //     [email, name, city]
    // );
    // console.log('check results = ', results);

    await User.create({
        email: email,
        name: name,
        city: city,
    });

    res.send('create user success');
};
const postUpdateUser = async (req, res) => {
    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log('check: ');
    await User.updateOne(
        { _id: userId },
        { email: email, name: name, city: city }
    );
    res.send('update user success');
};

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    //let user = await getUserByID(userId); ------------ MYSQL
    let user = await User.findById(userId).exec();
    res.render('delete.ejs', { user: user });
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    //let user = await getUserByID(userId);
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', { user: user });
};

const postHandleRemoveUser = async (req, res) => {
    let userId = req.body.userId;
    let results = await User.deleteOne({
        _id: userId,
    });
    console.log('check rs: ', results);
    res.redirect('/');
};

module.exports = {
    getHomePage,
    getHelloWorld,
    postCreateUser,
    postUpdateUser,
    postDeleteUser,
    getCreatePage,
    getUpdatePage,
    postHandleRemoveUser,
};
