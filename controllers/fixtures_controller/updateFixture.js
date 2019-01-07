const { checkSchema } = require('express-validator/check');

const Fixture = require('../../models/Fixture');
const { checkValidations, validFixture } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        fixture_id: {
            custom: {
                options: validFixture,
            },
        },
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
        },
        'options.name_fixture': {
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
                const { fixture_id, options } = req.body;
                options.updated_at = new Date();
                const fixture = await new Fixture({ id: fixture_id }).save(options, { patch: true });
                res.status(200).send({ fixture: fixture });
            } catch (err) {
                next(err);
            }
        }
    },
};
