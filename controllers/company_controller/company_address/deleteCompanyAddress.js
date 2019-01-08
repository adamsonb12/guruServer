const { checkSchema } = require('express-validator/check');

const { CompanyAddress } = require('../../../models');
const { checkValidations, validCompanyAddress } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        company_address_id: {
            in: ['parmas', 'body'],
            isInt: true,
            toInt: true,
            errorMessage: 'company_address_id is required',
            custom: {
                options: validCompanyAddress,
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { company_address_id } = req.body;
            try {
                await new CompanyAddress({ id: company_address_id }).destroy();
                res.status(200).send({ deleteAddress: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
