const { checkSchema } = require('express-validator/check');

const { Crew } = require('../../../models');
const { checkValidations, validCrew } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        crew_id: {
            custom: {
                options: validCrew,
            },
        },
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
        },
        'options.name_crew': {
            optional: true,
            isString: true,
            trim: true,
            errorMessage: 'name must be a valid string',
            escape: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { crew_id, options } = req.body;
                options.updated_at = new Date();
                const crew = await new Crew({ id: crew_id }).save(options, { patch: true });
                res.status(200).send({ crew: crew });
            } catch (err) {
                next(err);
            }
        }
    },
};
