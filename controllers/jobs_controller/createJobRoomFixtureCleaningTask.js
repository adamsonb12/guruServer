module.exports = (req, res) => {
    // receive data:
        // job_room_id
        // cleaning_task_id
        // other meta data for task
    // validate
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
                job_room_fixtures: [
                    {
                        job_room_fixture_id: 'job_room_fixture_id',
                        fixture_id: 'fixture_id',
                        job_room_fixture_cleaning_tasks: [
                            {
                                job_room_fixture_cleaning_task_id: 'job_room_fixture_cleaning_task_id',
                                cleaning_task_id: 'cleaning_task_id',
                            },
                        ],
                    },
                ],
            },
        ],
    });
};
