const { CompanyAddress } = require('../../../models');

module.exports = async (req, res, next) => {
    try {
        const company_addresses = await new CompanyAddress().fetchAll({ require: true });
        res.status(200).send({ company_addresses: company_addresses });
    } catch (err) {
        next(err);
    }
};
