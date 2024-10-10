const User = require('../models/user');

const getUsersAPI = async (req, res) => {
    //let rs = await getAllUsers();
    let rs = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: rs,
    });
};

module.exports = { getUsersAPI };
