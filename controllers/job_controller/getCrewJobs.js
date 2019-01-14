const { Job } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const jobs = await new Job().query({ where: { crew_id: req.query.crew_id } }).fetchAll({ require: true });
        if (jobs) {
            res.status(200).send({ jobs: jobs });
        } else {
            res.status(404).send('Not Found: Invalid crew ID');
        }
    } catch (err) {
        next(err);
    }
};
