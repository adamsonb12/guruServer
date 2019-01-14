const { Job } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const jobs = await new Job().fetchAll({ require: true });
        res.status(200).send({ jobs: jobs });
    } catch (err) {
        next(err);
    }
};
