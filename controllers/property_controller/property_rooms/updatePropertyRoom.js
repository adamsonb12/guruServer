const { checkSchema } = require('express-validator/check');

const PropertyRoom = require('../../../models/PropertyRoom');
const { checkValidations, validPropertyRoom } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        property_room_id: {
            in: ['params', 'body'],
            errorMessage: 'property room id is required',
            escape: true,
            custom: {
                options: validPropertyRoom,
            },
            isString: true,
        },
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
        },
        'options.name_property_room': {
            in: ['params', 'body'],
            errorMessage: 'invalid name_property_room',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'name_property_room should be at least 1 characters long',
                options: { min: 1 },
            },
            optional: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { property_room_id, options } = req.body;
                options.updated_at = new Date();
                const propertyRoom = await new PropertyRoom({ id: property_room_id }).save(options, { patch: true });
                res.status(200).send({ propertyRoom: propertyRoom });
            } catch (err) {
                next(err);
            }
        }
    },
};
