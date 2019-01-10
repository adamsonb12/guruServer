const { Employee } = require('../../../models');

module.exports = async (req, res, next) => {
    try {
        const employee = await new Employee({ id: req.query.employee_id }).fetch({
            withRelated: ['company_employee_roles'],
        });
        if (employee) {
            res.status(200).send({ employee: employee });
        } else {
            res.status(404).send('Not Found: Employee does not exist.');
        }
    } catch (err) {
        next(err);
    }
};
