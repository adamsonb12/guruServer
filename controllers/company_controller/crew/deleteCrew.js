const { checkSchema } = require('express-validator/check');

const { Crew } = require('../../../models');
const { checkValidations, validCrew } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        crew_id: {
            in: ['params', 'body'],
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
            try {
                await new Crew({ id: req.body.crew_id }).destroy();
                res.status(200).send({ deleteCrew: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
