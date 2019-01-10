const { checkSchema } = require('express-validator/check');
const uuidv1 = require('uuid/v1');

const { Fixture } = require('../../models');
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
                const fixtureTask = await new Fixture({ id: fixture_id }).tasks().attach({ id: uuidv1(), task_id });
                res.status(200).send({ fixtureTask: fixtureTask });
            } catch (err) {
                next(err);
            }
        }
    },
};
