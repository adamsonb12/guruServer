const { checkSchema } = require('express-validator/check');
const Employee = require('../../../models/Employee');
const { checkValidations, schemaValidEmployee } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        employee_id: {
            in: ['params', 'body'],
            isString: true,
            escape: true,
            trim: true,
            errorMessage: 'employee_id is required',
            custom: {
                options: schemaValidEmployee,
            },
        },
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { employee_id, options } = req.body;
                options.updated_at = new Date();
                const employee = await new Employee({ id: employee_id }).save(options, { patch: true });
                res.status(200).send({ employee: employee });
            } catch (err) {
                next(err);
            }
        }
    },
};
