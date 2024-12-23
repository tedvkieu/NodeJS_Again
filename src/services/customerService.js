const Customer = require('../models/customer');
const aqp = require('api-query-params');

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

const getAllCustomersService = async (limit, page, name, queryString) => {
    try {
        let result = null;

        if ((limit, page)) {
            let offset = (page - 1) * limit;
            const { filter, skip } = aqp(queryString);
            delete filter.page;
            console.log('filter: ', filter);

            result = await Customer.find(filter)
                .skip(offset)
                .limit(limit)
                .exec();
        } else {
            result = await Customer.find({});
        }

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
const deleteArrayCustomerService = async (arrIds) => {
    try {
        let result = await Customer.delete({ _id: { $in: arrIds } });
        // toán tử in xóa các phần tử từ arrIds gửi vào

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
    deleteArrayCustomerService,
};
