const { Fixture } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const fixtures = await new Fixture().fetchAll({ require: true });
        res.status(200).send({ fixtures: fixtures });
    } catch (err) {
        next(err);
    }
};
