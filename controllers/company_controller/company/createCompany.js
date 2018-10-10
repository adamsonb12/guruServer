const uuidv1 = require('uuid/v1');
const { checkSchema } = require('express-validator/check');

const Company = require('../../../models/Company');
const { checkValidations } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        name_company: {
            in: ['params', 'body'],
            errorMessage: 'name_company is required',
            trim: true,
            isString: true,
        },
        shortname_company: {
            in: ['params', 'body'],
            errorMessage: 'shortname_company is required',
            trim: true,
            isString: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { name_company, shortname_company } = req.body;
            const date = new Date();
            if (name_company && shortname_company) {
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
            } else {
                res.status(404).send('Error: Invalid Company Data');
            }
        }
    },
};
