const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFiles } = require('../services/fileService');

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

const postUploadSingleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        uploadSingleFile;
        return res.status(400).send('no files were uploaded');
    }
    let result = await uploadSingleFile(req.files.image);
    console.log('check res: ', result);
    return res.send('ok single');
};

const postUploadMultipleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('no files were uploaded');
    }

    if (Array.isArray(req.files.image)) {
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    } else {
        return await postUploadSingleFileAPI(req, res);
    }
};

module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUpdateUserAPI,
    postUploadSingleFileAPI,
    postUploadMultipleFileAPI,
};
