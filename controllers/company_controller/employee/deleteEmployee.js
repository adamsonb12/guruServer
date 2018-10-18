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
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                await new Employee({ id: req.body.employee_id }).destroy();
                res.status(200).send({ deleteEmployee: 'success ' });
            } catch (err) {
                next(err);
            }
        }
    },
};
