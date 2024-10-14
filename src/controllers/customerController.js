const { uploadSingleFile } = require('../services/fileService');
const customerService = require('../services/customerService');

module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;

        let imageUrl = '';
        if (!req.files || Object.keys(req.files).length === 0) {
            // do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            console.log(' check res :', result.path);
            imageUrl = result.path;
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl,
        };

        let customer = await customerService.createCustomerService(
            customerData
        );

        return res.status(200).json({
            EC: 0,
            data: customer,
        });
    },

    postCreateArrayCustomer: async (req, res) => {
        let data = req.body.customers;

        let customers = await customerService.createArrayCustomerService(data);


        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers,
            });
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers,
            });
        }
        
    },
};
