const { body, validationResult } = require('express-validator/check');

const Company = require('../models/Company');
const CompanyAddress = require('../models/CompanyAddress');

module.exports = {
    checkValidations: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
    },

    schemaValidCompany: async id => {
        const company = await new Company({ id: id }).fetch();
        if (!company) {
            throw new Error('Invalid Company Id');
        }
    },

    standardValidCompany: body('company_id').custom(async id => {
        const company = await new Company({ id: id }).fetch();
        if (!company) {
            throw new Error('Invalid Company Id');
        }
    }),

    schemaValidCompanyAddress: async id => {
        if (typeof id === 'number' && !isNaN(id)) {
            const companyAddress = await new CompanyAddress({ id: id }).fetch();
            if (!companyAddress) {
                throw new Error('Invalid Company Address Id');
            }
        } else {
            throw new Error(`Invalid input type: Expected a valid int. Recieved ${typeof id}: ${id}`);
        }
    },
};
