module.exports = (req, res) => {
    // receive data
        // job id
        // property id
        // room id (optional)
        // other room meta data
    // validate data
    // write to db
    res.send({
        job_id: 'job_id',
        customer_id: 'customer_id',
        crew_id: 'crew_id',
        property_id: 'property_id',
        rooms: [
            {
                job_room_id: 'job_room_id',
                room_id: 'room_id',
                job_room_fixtures: [],
            },
        ],
    });
};
