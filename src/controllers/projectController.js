const { createProject } = require('../services/projectService');

module.exports = {
    postCreateProject: async (req, res) => {
        console.log('vao link');
        let result = await createProject(req.body);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
};
