module.exports = (req, res) => {
    // receive data
        // company_address_id
        // company meta data
    // validate data
    // write to db
    res.send({
        company_id: 'company_id',
        company_address_id: 'company_address_id',
        // Company roles? Probably not needed => debatable how we should return the roles and employee info in this
        crews: []
    });
};
