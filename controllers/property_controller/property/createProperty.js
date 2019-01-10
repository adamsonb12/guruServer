const uuidv1 = require('uuid/v1');
const { checkSchema } = require('express-validator/check');

const { Property } = require('../../../models');
const { checkValidations, validUser } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        user_id: {
            in: ['params', 'body'],
            errorMessage: 'user_id is required',
            isString: true,
            trim: true,
            escape: true,
            custom: {
                options: validUser,
            },
        },
        name_property: {
            in: ['params', 'body'],
            errorMessage: 'name_property is required',
            isString: true,
            trim: true,
            escape: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { user_id, name_property } = req.body;
            const date = new Date();
            try {
                const property = await new Property({
                    id: uuidv1(),
                    user_id,
                    name_property,
                    created_at: date,
                    updated_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ property: property });
            } catch (err) {
                next(err);
            }
        }
    },
};
