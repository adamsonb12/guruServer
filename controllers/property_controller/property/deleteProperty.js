const { checkSchema } = require('express-validator/check');

const { Property } = require('../../../models');
const { checkValidations, validProperty } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        property_id: {
            in: ['params', 'body'],
            errorMessage: 'property id is required',
            escape: true,
            custom: {
                options: validProperty,
            },
            isString: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                await new Property({ id: req.body.property_id }).destroy();
                res.status(200).send({ deleteProperty: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
