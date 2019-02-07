const uuidv1 = require('uuid/v1');
const { checkSchema } = require('express-validator/check');
const { 
	checkValidations, 
	validUser, 
	validCrew, 
	validProperty 
} = require('../../utils/customValidations');
const { Job } = require('../../models');

module.exports = {
    validation: checkSchema({
        user_id: {
            in: ['params', 'body'],
            errorMessage: 'user_id is required',
            trim: true,
            isString: true,
            escape: true,
            custom: {
                options: validUser,
            },
        },
        crew_id: {
            in: ['params', 'body'],
            errorMessage: 'crew_id is required',
            trim: true,
            isString: true,
            escape: true,
            custom: {
            	options: validCrew,
            },
		},
		property_id: {
            in: ['params', 'body'],
            optional: true,
            errorMessage: 'property_id must be an id',
            trim: true,
            isString: true,
            escape: true,
            custom: {
            	options: validProperty,
            },
		},
		date_scheduled: {
			in: ['params', 'body'],
            optional: true,
            toDate: true,
            trim: true,
            errorMessage: 'date_scheduled must be a valid date',
            escape: true,
		},
		estimated_duration: {
			in: ['params', 'body'],
            optional: true,
            isInt: true,
            trim: true,
            errorMessage: 'estimated_duration must be a valid integer',
            escape: true,
		},
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { user_id, crew_id, property_id, date_scheduled, estimated_duration } = req.body;
			const date = new Date();
            try {
                const newJob = await new Job({
                    id: uuidv1(),
                    user_id: user_id,
					crew_id: crew_id,
					property_id: property_id,
					date_scheduled: date_scheduled,
					estimated_duration: estimated_duration,
                    created_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ job: newJob });
            } catch (err) {
                next(err);
            }
        }
    },
};
