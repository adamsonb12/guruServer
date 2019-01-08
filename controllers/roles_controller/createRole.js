const { checkSchema } = require('express-validator/check');

const { Role } = require('../../models');
const { checkValidations } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        name_role: {
            in: ['params', 'body'],
            errorMessage: 'name_role is required',
            trim: true,
            escape: true,
            isString: true,
            isLength: {
                errorMessage: 'name_role should be at least 3 characters long',
                options: { min: 3 },
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { name_role } = req.body;
            const date = new Date();
            try {
                const newRole = await new Role({
                    name_role: name_role,
                    created_at: date,
                    updated_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ role: newRole });
            } catch (err) {
                next(err);
            }
        }
    },
};
