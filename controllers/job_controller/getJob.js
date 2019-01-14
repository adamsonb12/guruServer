const { Job } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const job = await new Job({ id: req.query.job_id }).fetch();
        if (job) {
            res.status(200).send({ job: job });
        } else {
            res.status(404).send('Not Found: Invalid Job ID');
        }
    } catch (err) {
        next(err);
    }
};
