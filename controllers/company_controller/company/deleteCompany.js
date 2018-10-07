const Company = require('../../../models/Company');

module.exports = async (req, res, next) => {
    try {
        await new Company({ id: req.query.company_id }).destroy();
        res.status(200).send({ deleteCompany: 'success' });
    } catch (err) {
        next(err);
    }
};
