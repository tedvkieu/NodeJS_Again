const Customer = require('../models/customer');

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image,
        });
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);

        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getAllCustomersService = async () => {
    try {
        let result = await Customer.find({});

        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const updateACustomerService = async (data) => {
    try {
        let result = await Customer.updateOne(
            { _id: data.id },
            {
                name: data.name,
                address: data.address,
                email: data.email,
            }
        );

        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const deleteCustomerService = async (id) => {
    try {
        let result = await Customer.deleteById({ _id: id });

        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomersService,
    updateACustomerService,
    deleteCustomerService,
};
