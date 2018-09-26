const CompanyAddress = require('../../../models/CompanyAddress');

module.exports = async (req, res, next) => {
    console.log('req', req.query.company_id);
    try {
        const companyAddress = await new CompanyAddress({ 'company_id': req.query.company_id }).fetch();
        res.status(200).send({ companyAddress: companyAddress });
    } catch (err) {
        next(err);
    }
};
