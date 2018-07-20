// This is adding a role instance in the company roles table => it's more of an add, but create keeps it consistent
module.exports = (req, res) => {
    // receive data
        // role id
        // company id
        // employee id
    // validate data
    // write to db
    res.send({
        company_role_id: 'company_role_id',
        role_id: 'role_id',
        company_id: 'company_id',
        employee_id: 'employee_id'
    });
};
