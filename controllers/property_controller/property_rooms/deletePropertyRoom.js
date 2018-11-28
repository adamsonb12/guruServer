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
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                await new PropertyRoom({ id: req.body.property_room_id }).destroy();
                res.status(200).send({ deletePropertyRoom: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
