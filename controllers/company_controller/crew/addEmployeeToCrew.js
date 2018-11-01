const uuidv1 = require('uuid/v1');
const { checkSchema } = require('express-validator/check');

const {
    checkValidations,
    schemaValidCompany,
    validCrew,
    schemaValidEmployee,
} = require('../../../utils/customValidations');
const CrewEmployee = require('../../../models/CrewEmployee');

module.exports = {
    validation: checkSchema({
        company_id: {
            in: ['params', 'body'],
            errorMessage: 'company_id is required',
            trim: true,
            isString: true,
            escape: true,
            custom: {
                options: schemaValidCompany,
            },
        },
        employee_id: {
            in: ['params', 'body'],
            errorMessage: 'employee_id is required',
            trim: true,
            isString: true,
            escape: true,
            custom: {
                options: schemaValidEmployee,
            },
        },
        crew_id: {
            in: ['params', 'body'],
            errorMessage: 'crew_id is required',
            trim: true,
            isString: true,
            escape: true,
            custom: {
                options: validCrew,
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { company_id, employee_id, crew_id } = req.body;
            const date = new Date();
            try {
                const crewEmployee = await new CrewEmployee({
                    id: uuidv1(),
                    company_id: company_id,
                    employee_id: employee_id,
                    crew_id: crew_id,
                    created_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ crewEmployee: crewEmployee });
            } catch (err) {
                next(err);
            }
        }
    },
};
