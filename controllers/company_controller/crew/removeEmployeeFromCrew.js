const { checkSchema } = require('express-validator/check');

const { checkValidations, validCrewEmployee } = require('../../../utils/customValidations');
const CrewEmployee = require('../../../models/CrewEmployee');

module.exports = {
    validation: checkSchema({
        crew_employee_id: {
            in: ['params', 'body'],
            errorMessage: 'crew_employee_id is required',
            trim: true,
            isString: true,
            escape: true,
            custom: {
                options: validCrewEmployee,
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { crew_employee_id } = req.body;
            try {
                await new CrewEmployee({ id: crew_employee_id }).destroy();
                res.status(200).send({ deleteCrewEmployee: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
