const { checkSchema } = require('express-validator/check');

const { Fixture, Task } = require('../../models');
const { checkValidations, validFixture, validTask } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        fixture_id: {
            custom: {
                options: validFixture,
            },
        },
        task_id: {
            custom: {
                options: validTask,
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { fixture_id, task_id } = req.body;
                await new Fixture({ id: fixture_id }).tasks().detach(task_id);
                res.status(200).send({ deleteFixtureTask: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
