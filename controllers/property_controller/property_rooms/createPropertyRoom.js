const { checkSchema } = require('express-validator/check');

const PropertyRoom = require('../../../models/PropertyRoom');
const { checkValidations, validProperty } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        property_id: {
            custom: {
                options: validProperty,
            },
        },
        name_property_room: {
            in: ['params', 'body'],
            errorMessage: 'name_property_room is required',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'name_property_room should be at least 1 characters long',
                options: { min: 1 },
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { property_id, name_property_room } = req.body;
            const date = new Date();
            try {
                const newPropertyRoom = await new PropertyRoom({
                    property_id,
                    name_property_room,
                    created_at: date,
                    updated_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ propertyRoom: newPropertyRoom });
            } catch (err) {
                next(err);
            }
        }
    },
};
