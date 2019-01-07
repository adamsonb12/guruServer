const Role = require('../../models/Role');

module.exports = async (req, res, next) => {
    try {
        const role = await new Role().fetchAll({ require: true });
        res.status(200).send({ role: role });
    } catch (err) {
        next(err);
    }
};
