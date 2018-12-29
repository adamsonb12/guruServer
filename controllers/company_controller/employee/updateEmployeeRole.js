const { checkSchema } = require('express-validator/check');
const CompanyEmployeeRole = require('../../../models/CompanyEmployeeRole');
const { checkValidations, validCompanyEmployeeRole, validRole } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        employee_role_id: {
            in: ['params', 'body'],
            custom: {
                options: validCompanyEmployeeRole,
            },
            isString: true,
            escape: true,
            trim: true,
            errorMessage: 'employee_role_id is required',
        },
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
        },
        'options.role_id': {
            in: ['params', 'body'],
            custom: {
                options: validRole,
            },
            isInt: true,
            errorMessage: 'role_id is required, and must be a valid role',
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { employee_role_id, options } = req.body;
                if (options.employee_id) {
                    delete options.employee_id;
                }
                if (options.company_id) {
                    delete options.company_id;
                }
                options.updated_at = new Date();
                const employeeRole = await new CompanyEmployeeRole({ id: employee_role_id }).save(options, {
                    patch: true,
                });
                res.status(200).send({ employeeRole: employeeRole });
            } catch (err) {
                next(err);
            }
        }
    },
};
