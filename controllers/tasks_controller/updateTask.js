const { checkSchema } = require('express-validator/check');

const { Task } = require('../../models');
const { checkValidations, validTask } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        task_id: {
            custom: {
                options: validTask,
            },
        },
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
        },
        'options.name_task': {
            optional: true,
            isString: true,
            trim: true,
            errorMessage: 'name_task must be a valid string',
            escape: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { task_id, options } = req.body;
                options.updated_at = new Date();
                const task = await new Task({ id: task_id }).save(options, { patch: true });
                res.status(200).send({ task: task });
            } catch (err) {
                next(err);
            }
        }
    },
};
