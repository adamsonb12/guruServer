const Company = require('../../../models/Company');

module.exports = async (req, res, next) => {
    try {
        const companies = await new Company().fetchAll({ require: true });
        res.status(200).send({ companies: companies });
    } catch (err) {
        next(err);
    }
};
