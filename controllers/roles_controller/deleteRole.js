const { checkSchema } = require('express-validator/check');

const Role = require('../../models/Role');
const { checkValidations, validRole } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        role_id: {
            custom: {
                options: validRole,
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { role_id } = req.body;
            try {
                await new Role({ id: role_id }).destroy();
                res.status(200).send({ deleteRole: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
