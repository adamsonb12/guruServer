const { checkSchema } = require('express-validator/check');

const { Job } = require('../../models');
const { checkValidations, validJob } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        job_id: {
            in: ['params', 'body'],
            isString: true,
            escape: true,
            trim: true,
            errorMessage: 'job_id is required',
            custom: {
                options: validJob,
            },
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                await new Job({ id: req.body.job_id }).destroy();
                res.status(200).send({ deleteJob: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
