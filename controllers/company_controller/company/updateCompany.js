const { checkSchema } = require('express-validator/check');

const Company = require('../../../models/Company');
const { checkValidations, schemaValidCompany } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        company_id: {
            custom: {
                options: schemaValidCompany,
            },
        },
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
        },
        'options.name_company': {
            optional: true,
            isString: true,
            trim: true,
            errorMessage: 'name_company must be a valid string',
            escape: true,
            isLength: {
                errorMessage: 'name_company should be at least 3 characters long',
                options: { min: 3 },
            },
        },
        'options.shortname_company': {
            optional: true,
            isString: true,
            trim: true,
            errorMessage: 'shortname_company must be a valid string',
            escape: true,
            isLength: {
                errorMessage: 'name_company should be at least 3 characters long',
                options: { min: 3 },
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { company_id, options } = req.body;
                options.updated_at = new Date();
                const company = await new Company({ id: company_id }).save(options, { patch: true });
                res.status(200).send({ company: company });
            } catch (err) {
                next(err);
            }
        }
    },
};
