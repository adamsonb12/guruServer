const { checkSchema } = require('express-validator/check');

const CompanyAddress = require('../../../models/CompanyAddress');
const { checkValidations, schemaValidCompany } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        company_id: {
            custom: {
                options: schemaValidCompany,
            },
        },
        address_line_1: {
            in: ['params', 'body'],
            errorMessage: 'address_line_1 is required',
            trim: true,
            isString: true,
        },
        name_city: {
            in: ['params', 'body'],
            errorMessage: 'name_city is required',
            trim: true,
            isString: true,
        },
        state: {
            in: ['params', 'body'],
            errorMessage: 'state is required',
            trim: true,
            isString: true,
        },
        zipcode: {
            in: ['params', 'body'],
            errorMessage: 'zipcode is required',
            trim: true,
            isString: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { company_id, address_line_1, address_line_2, address_line_3, name_city, state, zipcode } = req.body;
            const date = new Date();
            if ((company_id, address_line_1, name_city, state, zipcode)) {
                try {
                    const newAddress = await new CompanyAddress({
                        company_id,
                        address_line_1,
                        address_line_2,
                        address_line_3,
                        name_city,
                        state,
                        zipcode,
                        created_at: date,
                        updated_at: date,
                    }).save(null, { method: 'insert' });
                    res.status(200).send({ address: newAddress });
                } catch (err) {
                    next(err);
                }
            } else {
                res.status(404).send('Error, Invalid Address');
            }
        }
    },
};
