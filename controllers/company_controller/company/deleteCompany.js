const Company = require('../../../models/Company');
const { checkValidations, standardValidCompany } = require('../../../utils/customValidations');

module.exports = {
    validation: standardValidCompany,

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            try {
                await new Company({ id: req.body.company_id }).destroy();
                res.status(200).send({ deleteCompany: 'success' });
            } catch (err) {
                next(err);
            }
        }
    },
};
