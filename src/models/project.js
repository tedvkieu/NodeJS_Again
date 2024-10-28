const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

//shape data
const  customerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        startDate: String,
        endDate: String,
        description: String,
        customerInfor: customerSchema,
        usersInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        leader: userSchema,
        tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    },
    {
        timestamps: true, // createdAt, updatedAt
    }
);

// Override all methods
projectSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
