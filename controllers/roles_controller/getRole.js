const { Role } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const role = await new Role({ id: req.query.role_id }).fetch();
        if (role) {
            res.status(200).send({ role: role });
        } else {
            res.status(404).send('Not Found: Invalid Role Id');
        }
    } catch (err) {
        next(err);
    }
};
