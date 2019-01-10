const { checkSchema } = require('express-validator/check');

const { Company } = require('../../../models');
const { checkValidations, validCompany } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        company_id: {
            custom: {
                options: validCompany,
            },
        }
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                await new Company({ id: req.body.company_id }).destroy();
                res.status(200).send({ deleteCompany: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
