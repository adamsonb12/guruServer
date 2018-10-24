const CompanyAddress = require('../../../models/CompanyAddress');

module.exports = async (req, res, next) => {
    try {
        const companyAddress = await new CompanyAddress({ company_id: req.query.company_id }).fetch();
        res.status(200).send({ companyAddress: companyAddress });
    } catch (err) {
        next(err);
    }
};
