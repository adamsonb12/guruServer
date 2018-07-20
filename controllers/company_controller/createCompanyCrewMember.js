// this like company role, is more of an add than a create, your adding an existing employee to a crew
module.exports = (req, res) => {
    // receive data
        // company_id
        // employee_id
        // crew_id
    res.send({
        company_id: 'company_id',
        company_address_id: 'company_address_id',
        // Company roles? Probably not needed => debatable how we should return the roles and employee info in this
        crews: [
            {
                crew_id: 'crew_id',
                crew_members: [
                    {
                        crew_members_id: 'crew_members_id'
                    }
                ]
            },
        ],
    });
};
