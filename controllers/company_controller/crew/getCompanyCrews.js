const Crew = require('../../../models/Crew');

module.exports = async (req, res, next) => {
    try {
        const crews = await new Crew().query({ where: { company_id: req.query.company_id } }).fetchAll();
        if (crews) {
            res.status(200).send({ crews: crews });
        } else {
            res.status(404).send('Not Found: Invalid crew ID');
        }
    } catch (err) {
        next(err);
    }
};
