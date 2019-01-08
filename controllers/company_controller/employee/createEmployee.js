const uuidv1 = require('uuid/v1');
const { checkSchema } = require('express-validator/check');

const { Employee } = require('../../../models');
const { checkValidations, validUser } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        user_id: {
            in: ['params', 'body'],
            custom: {
                options: validUser,
            },
            escape: true,
            isString: true,
            errorMessage: 'Invalid user id',
            trim: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { user_id } = req.body;
            const date = new Date();
            try {
                const employee = await new Employee({
                    id: uuidv1(),
                    user_id: user_id,
                    created_at: date,
                    updated_at: date
                }).save(null, { method: 'insert' });
                res.status(200).send({ employee: employee });
            } catch (err) {
                next(err);
            }
        }
    },
};
