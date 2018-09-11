const Company = require('../../models/Company');

module.exports = async (req, res) => {
    if (req && req.query && req.query.company_id) {
        const company = await new Company({ id: req.query.company_id }).fetch({
            withRelated: ['company_address'],
        });
        if (company) {
            res.status(200).send({ company: company });
        } else {
            res.status(404).send('Not Found: Invalid Company ID');
        }
    } else {
        res.status(404).send('Not Found: Invalid Company ID');
    }
};
