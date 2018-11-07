const { checkSchema } = require('express-validator/check');

const User = require('../../models/User');
const { checkValidations, schemaValidUser } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        user_id: {
            in: ['params', 'body'],
            isString: true,
            escape: true,
            custom: {
                options: schemaValidUser,
            },
            errorMessage: 'user_id is required',
            trim: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                await new User({ id: req.body.user_id }).destroy();
                res.status(200).send({ deleteUser: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
