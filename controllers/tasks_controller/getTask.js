const { Task } = require('../../models');

module.exports = async (req, res, next) => {
    try {
        const task = await new Task({ id: req.query.task_id }).fetch();
        if (task) {
            res.status(200).send({ task: task });
        } else {
            res.status(404).send('Not Found: Invalid Task Id');
        }
    } catch (err) {
        next(err);
    }
};
