const Employee = require('../../../models/Employee');

module.exports = async (req, res, next) => {
    try {
        const employees = await new Employee().fetchAll({ require: true });
        res.status(200).send({ employees: employees });
    } catch (err) {
        next(err);
    }
};
