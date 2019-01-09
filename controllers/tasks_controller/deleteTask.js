const { checkSchema } = require('express-validator/check');

const { Task } = require('../../models');
const { checkValidations, validTask } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        task_id: {
            in: ['params', 'body'],
            isInt: true,
            errorMessage: 'task_id is required',
            custom: {
                options: validTask,
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                await new Task({ id: req.body.task_id }).destroy();
                res.status(200).send({ deleteTask: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
