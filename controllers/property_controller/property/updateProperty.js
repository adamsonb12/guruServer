const { checkSchema } = require('express-validator/check');

const Property = require('../../../models/Property');
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
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
        },
        'options.name_property': {
            in: ['params', 'body'],
            errorMessage: 'name_property must be a valid string',
            isString: true,
            trim: true,
            escape: true,
            optional: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { property_id, options } = req.body;
                options.updated_at = new Date();
                const property = await new Property({ id: property_id }).save(options, { patch: true });
                res.status(200).send({ property: property });
            } catch (err) {
                next(err);
            }
        }
    },
};
