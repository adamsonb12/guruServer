const Employee = require('../../models/Employee');

module.exports = async (req, res) => {
    if (req && req.query && req.query.employee_id) {
        const employee = await new Employee({ id: req.query.employee_id}).fetch();
        if (employee) {
            res.status(200).send({ employee: employee });
        } else {
            res.status(404).send('Not Found: Invalid Employee ID');
        }
    } else {
        res.status(404).send('Not Found: Invalid Employee ID');
    }
};
