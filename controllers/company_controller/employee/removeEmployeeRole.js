const { checkSchema } = require('express-validator/check');

const { CompanyEmployeeRole } = require('../../../models');
const { checkValidations, validCompanyEmployeeRole } = require('../../../utils/customValidations');

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
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { employee_role_id } = req.body;
            try {
                await new CompanyEmployeeRole({ id: employee_role_id }).destroy();
                res.status(200).send({ deleteCompanyEmployeeRole: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
