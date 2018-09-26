const Company = require('../../../models/Company');
const uuidv1 = require('uuid/v1');

module.exports = async (req, res, next) => {
    const { name_company, shortname_company } = req.query;
    const date = new Date();
    if (name_company && shortname_company) {
        try {
            const newCompany = await new Company({
                id: uuidv1(),
                name_company: name_company,
                shortname_company: shortname_company,
                created_at: date,
                updated_at: date,
            }).save(null, { method: 'insert' });
            res.status(200).send({ company: newCompany });
        } catch (err) {
            next(err);
        }
    } else {
        res.status(404).send('Error: Invalid Company Data');
    }
};
