const { checkSchema } = require('express-validator/check');

const { Fixture } = require('../../models');
const { checkValidations, validFixture } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        fixture_id: {
            in: ['params', 'body'],
            isInt: true,
            errorMessage: 'fixture_id is required',
            custom: {
                options: validFixture,
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                await new Fixture({ id: req.body.fixture_id }).destroy();
                res.status(200).send({ deleteFixture: 'success ' });
            } catch (err) {
                next(err);
            }
        }
    },
};
