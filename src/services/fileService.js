const uploadSingleFile = async (fileObject) => {
    let uploadPath = __dirname + fileObject.name;

    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: 'link-image',
            error: null,
        };
    } catch (error) {
        console.log("cehck err", error)
        return {
            status: 'failed',
            pat: null,
            error: JSON.stringify(error),
        };
    }
    

};

const uploadMultipleFile = () => {};

module.exports = {
    uploadSingleFile,
    uploadMultipleFile,
};
