const Crew = require('../../models/Crew');

module.exports = async (req, res) => {
    try {
        const crew = await new Crew({ id: req.query.crew_id }).fetch({
            withRelated: ['crew_employees'],
        });
        if (crew) {
            res.status(200).send({ crew: crew });
        } else {
            res.status(404).send('Not Found: Invalid Crew ID');
        }
    } catch (error) {
        res.status(404).send('Not Found: Invalid Crew ID');
    }
};
