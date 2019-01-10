const { checkSchema } = require('express-validator/check');

const { PropertyAddress } = require('../../../models');
const { checkValidations, validPropertyAddress } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        property_address_id: {
            in: ['parmas', 'body'],
            isString: true,
            escape: true,
            trim: true,
            errorMessage: 'property_address_id is required',
            custom: {
                options: validPropertyAddress,
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { property_address_id } = req.body;
            try {
                await new PropertyAddress({ id: property_address_id }).destroy();
                res.status(200).send({ deleteAddress: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
