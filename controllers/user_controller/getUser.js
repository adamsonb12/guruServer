const User = require('../../models/User');

module.exports = async (req, res, next) => {
    try {
        const user = await new User({ id: req.query.user_id }).fetch();
        if (user) {
            res.status(200).send({ user: user });
        } else {
            res.status(404).send('Not Found: Invalid user id');
        }
    } catch (err) {
        next(err);
    }
};
