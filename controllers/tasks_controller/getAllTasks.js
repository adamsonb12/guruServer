const { Task } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const tasks = await new Task().fetchAll({ require: true });
        res.status(200).send({ tasks: tasks });
    } catch (err) {
        next(err);
    }
};
