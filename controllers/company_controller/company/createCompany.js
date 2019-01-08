const uuidv1 = require('uuid/v1');
const { checkSchema } = require('express-validator/check');

const { Company } = require('../../../models');
const { checkValidations } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        name_company: {
            in: ['params', 'body'],
            errorMessage: 'name_company is required',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'name_company should be at least 3 characters long',
                options: { min: 3 },
            },
        },
        shortname_company: {
            in: ['params', 'body'],
            errorMessage: 'shortname_company is required',
            trim: true,
            isString: true,
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
            const { name_company, shortname_company } = req.body;
            const date = new Date();
            try {
                const newCompany = await new Company({
                    id: uuidv1(),
                    name_company: name_company,
                    shortname_company: shortname_company,
                    created_at: date,
                    updated_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ company: newCompany });
            } catch (err) {
                next(err);
            }
        }
    },
};
