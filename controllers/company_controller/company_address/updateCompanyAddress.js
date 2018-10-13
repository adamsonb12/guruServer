const { checkSchema } = require('express-validator/check');

const CompanyAddress = require('../../../models/CompanyAddress');
const { checkValidations, schemaValidCompanyAddress } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        company_address_id: schemaValidCompanyAddress,
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
        },
        'options.address_line_1': {
            optional: true,
            errorMessage: 'address_line_1 is required',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'address_line_1 should be at least 3 characters long',
                options: { min: 3 },
            },
        },
        'options.address_line_2': {
            optional: true,
            errorMessage: 'address_line_2 must be a valid string',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'address_line_2 should be at least 2 characters long',
                options: { min: 2 },
            },
        },
        'options.address_line_3': {
            optional: true,
            errorMessage: 'address_line_3 must be a valid string',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'address_line_3 should be at least 1 characters long',
                options: { min: 1 },
            },
        },
        'options.name_city': {
            optional: true,
            errorMessage: 'name_city is required',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'name_city should be at least 3 characters long',
                options: { min: 3 },
            },
        },
        'options.state': {
            optional: true,
            errorMessage: 'state is required',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'state should be at least 2 characters long',
                options: { min: 2 },
            },
        },
        'options.zipcode': {
            optional: true,
            errorMessage: 'zipcode is required',
            trim: true,
            isPostalCode: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { company_address_id, options } = req.body;
                options.updated_at = new Date();
                const companyAddress = await new CompanyAddress({ id: company_address_id }).save(options, {
                    patch: true,
                });
                res.status(200).send({ companyAddress: companyAddress });
            } catch (err) {
                next(err);
            }
        }
    },
};
