const { Crew } = require('../../../models');

module.exports = async (req, res, next) => {
    try {
        const crew = await new Crew({ id: req.query.crew_id }).fetch({
            withRelated: ['crew_employees'],
        });
        if (crew) {
            res.status(200).send({ crew: crew });
        } else {
            res.status(404).send('Not Found: Invalid crew ID');
        }
    } catch (err) {
        next(err);
    }
};
