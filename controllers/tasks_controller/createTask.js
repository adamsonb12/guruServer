const { checkSchema } = require('express-validator/check');

const { Task } = require('../../models');
const { checkValidations } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        name_task: {
            in: ['params', 'body'],
            errorMessage: 'name_task is required',
            trim: true,
            escape: true,
            isString: true,
            isLength: {
                errorMessage: 'name_task should be at least 2 characters long',
                options: { min: 2 },
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { name_task } = req.body;
            const date = new Date();
            try {
                const newTask = await new Task({
                    name_task,
                    created_at: date,
                    updated_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ newTask: newTask });
            } catch (err) {
                next(err);
            }
        }
    },
};
