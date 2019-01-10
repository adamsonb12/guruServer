const { checkSchema } = require('express-validator/check');

const { User } = require('../../models');
const { checkValidations, validEmail, validUser } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        user_id: {
            custom: {
                options: validUser,
            },
        },
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
        },
        'options.name_first': {
            optional: true,
            errorMessage: 'name_first must be a valid string',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'name_first should be at least 3 characters long',
                options: { min: 3 },
            },
        },
        'options.name_last': {
            optional: true,
            in: ['params', 'body'],
            errorMessage: 'name_last must be a valid string',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'name_last should be at least 3 characters long',
                options: { min: 3 },
            },
        },
        'options.name_middle': {
            optional: true,
            in: ['params', 'body'],
            errorMessage: 'name_last must be a valid string',
            trim: true,
            isString: true,
            escape: true,
        },
        'options.email': {
            optional: true,
            in: ['params', 'body'],
            errorMessage: 'email is not a valid email',
            trim: true,
            isEmail: true,
            escape: true,
            custom: {
                options: validEmail,
            },
        },
        'options.password': {
            optional: true,
            in: ['params', 'body'],
            errorMessage: 'ivalid password',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'password should be at least 8 characters long',
                options: { min: 8 },
            },
        },
        'options.date_birth': {
            optional: true,
            in: ['params', 'body'],
            errorMessage: 'date_of_birth must be a valid date',
            trim: true,
            escape: true,
            toDate: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { user_id, options } = req.body;
                options.updated_at = new Date();
                const user = await new User({ id: user_id }).save(options, { patch: true });
                res.status(200).send({ user: user });
            } catch (err) {
                next(err);
            }
        }
    },
};
