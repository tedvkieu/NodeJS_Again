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

const putUpdateUserAPI = async (req, res) => {
    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let user = await User.updateOne(
        { _id: userId },
        { email: email, name: name, city: city }
    );

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};

const deleteUpdateUserAPI = async (req, res) => {
    let userId = req.body.userId;
    let results = await User.deleteOne({
        _id: userId,
    });
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};

module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUpdateUserAPI,
};
