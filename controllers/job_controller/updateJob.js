const { checkSchema } = require('express-validator/check');

const { Job } = require('../../models');
const { checkValidations, validJob } = require('../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        job_id: {
            custom: {
            	options: validJob,
            },
        },
        options: {
            in: ['params', 'body'],
            errorMessage: 'The options object is required',
		},
        'options.date_scheduled': {
            optional: true,
            toDate: true,
            trim: true,
            errorMessage: 'date_scheduled must be a valid date',
            escape: true,
		},
		'options.date_starts': {
            optional: true,
            toDate: true,
            trim: true,
            errorMessage: 'date_starts must be a valid date',
            escape: true,
		},
		'options.estimated_duration': {
            optional: true,
            isInt: true,
            trim: true,
            errorMessage: 'estimated_duration must be a valid integer',
            escape: true,
		},        
		'options.date_arrived': {
            optional: true,
            isString: true,
            trim: true,
            errorMessage: 'date_arrived must be a valid string',
            escape: true,
		},        
		'options.date_completed': {
            optional: true,
            isString: true,
            trim: true,
            errorMessage: 'date_completed must be a valid string',
            escape: true,
		},        
		'options.tip_amount': {
            optional: true,
			isInt: true,
            trim: true,
            errorMessage: 'tip_amount must be a valid integer',
            escape: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                const { job_id, options } = req.body;
                options.updated_at = new Date();
                const job = await new Job({ id: job_id }).save(options, { patch: true });
                res.status(200).send({ job: job });
            } catch (err) {
                next(err);
            }
        }
    },
};
