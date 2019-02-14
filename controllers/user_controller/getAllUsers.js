const { User } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const users = await new User().fetchAll({ require: true, columns: ['id', 'name_first', 'name_last', 'name_middle', 'email', 'date_birth'] });
        res.status(200).send({ users: users });
    } catch (err) {
        next(err);
    }
};
