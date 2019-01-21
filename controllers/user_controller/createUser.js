const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');
const { checkSchema } = require('express-validator/check');

const { User } = require('../../models');
const { checkValidations, validEmail } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        name_first: {
            in: ['params', 'body'],
            errorMessage: 'name_first is required',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'name_first should be at least 3 characters long',
                options: { min: 3 },
            },
        },
        name_last: {
            in: ['params', 'body'],
            errorMessage: 'name_last is required',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'name_last should be at least 3 characters long',
                options: { min: 3 },
            },
        },
        name_middle: {
            in: ['params', 'body'],
            errorMessage: 'name_last is required',
            trim: true,
            isString: true,
            escape: true,
            optional: true,
        },
        email: {
            in: ['params', 'body'],
            errorMessage: 'email is required',
            trim: true,
            isEmail: true,
            escape: true,
            custom: {
                options: validEmail,
            },
        },
        password: {
            in: ['params', 'body'],
            errorMessage: 'password is required',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'password should be at least 10 characters long',
                options: { min: 10 },
            },
        },
        date_birth: {
            in: ['params', 'body'],
            errorMessage: 'date_of_birth is required',
            trim: true,
            escape: true,
            toDate: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { name_first, name_middle, name_last, email, password, date_birth } = req.body;
                const date = new Date();
                const hash = await bcrypt.hash(password, parseInt(process.env.SALT_STACK, 10));
                const newUser = await new User({
                    id: uuidv1(),
                    name_first,
                    name_middle,
                    name_last,
                    email,
                    password: hash,
                    date_birth,
                    created_at: date,
                    updated_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ user: newUser });
            } catch (err) {
                next(err);
            }
        }
    },
};
