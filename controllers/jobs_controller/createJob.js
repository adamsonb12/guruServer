module.exports = (req, res) => {
    // receive data:
        // customer id
        // crew id
        // property id
        // Other job metadata
    // validate data
    // write to timekit and wait for a success response => see timekit 
    // Write to db
    res.send({
        job_id: 'job_id',
        customer_id: 'customer_id',
        crew_id: 'crew_id',
        property_id: 'property_id',
        rooms: [],
    });
};
