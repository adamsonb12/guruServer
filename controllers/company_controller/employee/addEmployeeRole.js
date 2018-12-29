const uuidv1 = require('uuid/v1');
const { checkSchema } = require('express-validator/check');

const CompanyEmployeeRole = require('../../../models/CompanyEmployeeRole');
const {
    checkValidations,
    validRole,
    schemaValidCompany,
    schemaValidEmployee,
} = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        role_id: {
            in: ['params', 'body'],
            custom: {
                options: validRole,
            },
            isInt: true,
            errorMessage: 'role_id is required, and must be a valid role',
        },
        company_id: {
            in: ['params', 'body'],
            custom: {
                options: schemaValidCompany,
            },
            isString: true,
            trim: true,
            escape: true,
            errorMessage: 'company_id is required, and must be a valid company',
        },
        employee_id: {
            in: ['params', 'body'],
            custom: {
                options: schemaValidEmployee,
            },
            isString: true,
            trim: true,
            escape: true,
            errorMessage: 'employee_id is required, and must be a valid employee of the company',
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { role_id, company_id, employee_id } = req.body;
            const date = new Date();
            try {
                const companyEmployeeRole = await new CompanyEmployeeRole({
                    id: uuidv1(),
                    role_id,
                    company_id,
                    employee_id,
                    created_at: date,
                    updated_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ companyEmployeeRole: companyEmployeeRole });
            } catch (err) {
                next(err);
            }
        }
    },
};
