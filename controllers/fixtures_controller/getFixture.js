const Fixture = require('../../models/Fixture');

module.exports = async (req, res, next) => {
    try {
        const fixture = await new Fixture({ id: req.query.fixture_id }).fetch({
            withRelated: ['tasks'],
        });
        if (fixture) {
            res.status(200).send({ fixture: fixture });
        } else {
            res.status(404).send('Not Found: Invalid Fixture Id');
        }
    } catch (err) {
        next(err);
    }
};
