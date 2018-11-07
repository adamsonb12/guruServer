const User = require('../../models/User');

module.exports = async (req, res, next) => {
    try {
        const users = await new User().fetchAll({ require: true });
        res.status(200).send({ users: users });
    } catch (err) {
        next(err);
    }
};
