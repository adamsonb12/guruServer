const { checkSchema } = require('express-validator/check');

const Fixture = require('../../models/Fixture');
const { checkValidations } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        name_fixture: {
            in: ['params', 'body'],
            errorMessage: 'name_fixture is required',
            trim: true,
            escape: true,
            isString: true,
            isLength: {
                errorMessage: 'name_fixture should be at least 2 characters long',
                options: { min: 2 },
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { name_fixture } = req.body;
            const date = new Date();
            try {
                const newFixture = await new Fixture({
                    name_fixture,
                    created_at: date,
                    updated_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ newFixture: newFixture });
            } catch (err) {
                next(err);
            }
        }
    },
};
