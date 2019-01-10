const { checkSchema } = require('express-validator/check');

const { Role } = require('../../models');
const { checkValidations, validRole } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        role_id: {
            custom: {
                options: validRole,
            },
        },
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
        },
        'options.name_role': {
            optional: true,
            isString: true,
            trim: true,
            errorMessage: 'name_role must be a valid string',
            escape: true,
            isLength: {
                errorMessage: 'name_role should be at least 3 characters long',
                options: { min: 3 },
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { options, role_id } = req.body;
            const date = new Date();
            options.updated_at = date;
            try {
                const role = await new Role({ id: role_id }).save(options, { patch: true });
                res.status(200).send({ role: role });
            } catch (err) {
                next(err);
            }
        }
    },
};
