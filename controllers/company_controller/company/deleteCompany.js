const Company = require('../../../models/Company');

module.exports = async (req, res, next) => {
    try {
        await new Company({ id: req.query.company_id }).destroy();
        res.status(200);
    } catch (err) {
        next(err);
    }
};
