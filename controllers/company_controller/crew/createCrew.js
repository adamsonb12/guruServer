const uuidv1 = require('uuid/v1');
const { checkSchema } = require('express-validator/check');

const { Crew } = require('../../../models');
const { checkValidations, validCompany } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        company_id: {
            in: ['params', 'body'],
            errorMessage: 'company_id is required',
            trim: true,
            isString: true,
            escape: true,
            custom: {
                options: validCompany,
            },
        },
        name_crew: {
            in: ['params', 'body'],
            errorMessage: 'name_crew is required',
            trim: true,
            isString: true,
            escape: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { company_id, name_crew } = req.body;
            const date = new Date();
            try {
                const newCrew = await new Crew({
                    id: uuidv1(),
                    company_id: company_id,
                    name_crew: name_crew,
                    created_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ crew: newCrew });
            } catch (err) {
                next(err);
            }
        }
    },
};
