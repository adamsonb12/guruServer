const Company = require('../../../models/Company');

module.exports = async (req, res, next) => {
    // TODO => Validate company exists and data is valid
    try {
        console.log('req', req);
        // const options = req.body;
        // const company = await new Company({ id: req.body.company_id }).fetch({ require: true });
        // company.set[options];
        // company.save(null, { method: 'update' });
        // res.status(200).send({ company: company });
        // res.send(req);
    } catch (err) {
        next(err);
    }
};
