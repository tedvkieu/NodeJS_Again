const User = require('../models/user');

const getUsersAPI = async (req, res) => {
    //let rs = await getAllUsers();
    let rs = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: rs,
    });
};

const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let user = await User.create({
        email: email,
        name: name,
        city: city,
    });

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};

module.exports = { getUsersAPI, postCreateUserAPI };
