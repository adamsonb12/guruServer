const { checkSchema } = require('express-validator/check');

const CompanyAddress = require('../../../models/CompanyAddress');
const { checkValidations, schemaValidCompanyAddress } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        company_address_id: {
            in: ['parmas', 'body'],
            isInt: true,
            toInt: true,
            errorMessage: 'company_address_id is required',
            custom: {
                options: schemaValidCompanyAddress,
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                await new CompanyAddress({ id: req.body.company_address_id }).destroy();
                res.status(200).send({ deleteAddress: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
