const uuidv1 = require('uuid/v1');
const { checkSchema } = require('express-validator/check');

const Employee = require('../../../models/Employee');
const { checkValidations } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({}),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { user_id } = req.body;
            try {
                const employee = await new Employee({
                    id: uuidv1(),
                    user_id: user_id,
                }).save(null, { method: 'insert' });
                res.status(200).send({ employee: employee });
            } catch (err) {
                next(err);
            }
        }
    },
};
