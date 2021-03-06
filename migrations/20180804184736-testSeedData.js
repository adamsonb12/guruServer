// This is the migration for creating our testing data =>
// feel free to edit it if necessary, and add to it all you need.

'use strict';
const dataTypes = require('db-migrate-shared');
const async = require('async');
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');

let dbm;
let type;
let seed;
const dataType = dataTypes.dataType;

// unique user id's
const user_id1 = uuidv1();
const user_id2 = uuidv1();
const user_id3 = uuidv1();
const user_id4 = uuidv1();

// unique property address id's
const property_address_id1 = uuidv1();
const property_address_id2 = uuidv1();
const property_address_id3 = uuidv1();
const property_address_id4 = uuidv1();

// unique property room id's
// let property_room_id1 = uuidv1();
// let property_room_id2 = uuidv1();
// let property_room_id3 = uuidv1();
// let property_room_id4 = uuidv1();

// unique property room fixture id's
const property_room_fixture_id1 = uuidv1();
const property_room_fixture_id2 = uuidv1();
const property_room_fixture_id3 = uuidv1();
const property_room_fixture_id4 = uuidv1();

// unique company id's
const company_id1 = uuidv1();
const company_id2 = uuidv1();
const company_id3 = uuidv1();
const company_id4 = uuidv1();

// unique employee id's
const employee_id1 = uuidv1();
const employee_id2 = uuidv1();

// unique crew id's
const crew_id1 = uuidv1();
const crew_id2 = uuidv1();
const crew_id3 = uuidv1();
const crew_id4 = uuidv1();

// unique job id's
const job_id1 = uuidv1();
const job_id2 = uuidv1();
const job_id3 = uuidv1();
const job_id4 = uuidv1();

// unique job room id's
const job_room_id1 = uuidv1();
const job_room_id2 = uuidv1();
const job_room_id3 = uuidv1();
const job_room_id4 = uuidv1();

// unique job room fixture id's
const job_room_fixture_id1 = uuidv1();
const job_room_fixture_id2 = uuidv1();
const job_room_fixture_id3 = uuidv1();
const job_room_fixture_id4 = uuidv1();

// unique job room fixture task id's
const job_room_fixture_task_id1 = uuidv1();
const job_room_fixture_task_id2 = uuidv1();
const job_room_fixture_task_id3 = uuidv1();
const job_room_fixture_task_id4 = uuidv1();

// ids for properties
const property_id_1 = uuidv1();
const property_id_2 = uuidv1();
const property_id_3 = uuidv1();
const property_id_4 = uuidv1();

const defaultTimeStamp = new Date();

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function(db, callback) {
    bcrypt.hash('guest', parseInt(process.env.SALT_STACK, 10)).then(password => {
        async.series(
            [
                // companies
                db.insert.bind(
                    db,
                    'companies',
                    ['id', 'name_company', 'shortname_company', 'created_at'],
                    [company_id1, 'Martha & Company', 'Marta & Co.', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'companies',
                    ['id', 'name_company', 'shortname_company', 'created_at'],
                    [company_id2, 'Blizzard', 'Blizz', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'companies',
                    ['id', 'name_company', 'shortname_company', 'created_at'],
                    [company_id3, 'Valve', 'Val', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'companies',
                    ['id', 'name_company', 'shortname_company', 'created_at'],
                    [company_id4, 'Nintendo', 'Nin', defaultTimeStamp]
                ),

                // company addresses
                db.insert.bind(
                    db,
                    'company_addresses',
                    [
                        'company_id',
                        'address_line_1',
                        'address_line_2',
                        'address_line_3',
                        'name_city',
                        'state',
                        'zipcode',
                        'created_at',
                    ],
                    [company_id1, '1234 Guru St.', null, null, 'Salt Lake City', 'UT', '12345', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'company_addresses',
                    [
                        'company_id',
                        'address_line_1',
                        'address_line_2',
                        'address_line_3',
                        'name_city',
                        'state',
                        'zipcode',
                        'created_at',
                    ],
                    [company_id2, '1234 Canada St.', null, null, 'New York City', 'NY', '12345', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'company_addresses',
                    [
                        'company_id',
                        'address_line_1',
                        'address_line_2',
                        'address_line_3',
                        'name_city',
                        'state',
                        'zipcode',
                        'created_at',
                    ],
                    [company_id3, '1234 England St.', null, null, 'Des Moines', 'IA', '12345', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'company_addresses',
                    [
                        'company_id',
                        'address_line_1',
                        'address_line_2',
                        'address_line_3',
                        'name_city',
                        'state',
                        'zipcode',
                        'created_at',
                    ],
                    [company_id4, '1234 Italy St.', null, null, 'Seattle', 'WA', '12345', defaultTimeStamp]
                ),

                // crews
                db.insert.bind(
                    db,
                    'crews',
                    ['id', 'company_id', 'name_crew', 'created_at'],
                    [crew_id1, company_id1, 'Magic Rags', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'crews',
                    ['id', 'company_id', 'name_crew', 'created_at'],
                    [crew_id2, company_id2, 'Kompletely Klean', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'crews',
                    ['id', 'company_id', 'name_crew', 'created_at'],
                    [crew_id3, company_id3, 'Filth Fighters', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'crews',
                    ['id', 'company_id', 'name_crew', 'created_at'],
                    [crew_id4, company_id4, 'Scrub-a-Dub-Dub', defaultTimeStamp]
                ),
                // users
                db.insert.bind(
                    db,
                    'users',
                    ['id', 'name_first', 'name_last', 'name_middle', 'email', 'password', 'date_birth', 'created_at'],
                    [
                        user_id1,
                        'Luke',
                        'Skywalker',
                        null,
                        'wompratkiller@test.com',
                        password,
                        '1951-09-25',
                        defaultTimeStamp,
                    ]
                ),
                db.insert.bind(
                    db,
                    'users',
                    ['id', 'name_first', 'name_last', 'name_middle', 'email', 'password', 'date_birth', 'created_at'],
                    [
                        user_id2,
                        'Darth',
                        'Vader',
                        'Anakin',
                        'slayerofyounglings@test.com',
                        password,
                        '1931-01-17',
                        defaultTimeStamp,
                    ]
                ),
                db.insert.bind(
                    db,
                    'users',
                    ['id', 'name_first', 'name_last', 'name_middle', 'email', 'password', 'date_birth', 'created_at'],
                    [user_id3, 'Obiwan', 'Kenobi', null, 'hellothere@test.com', password, '1971-03-31', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'users',
                    ['id', 'name_first', 'name_last', 'name_middle', 'email', 'password', 'date_birth', 'created_at'],
                    [
                        user_id4,
                        'Sheev',
                        'Palpatine',
                        'Emperor',
                        'ultimatepower@test.com',
                        password,
                        '1944-08-11',
                        defaultTimeStamp,
                    ]
                ),

                // employees
                db.insert.bind(
                    db,
                    'employees',
                    ['id', 'user_id', 'created_at'],
                    [employee_id1, user_id4, defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'employees',
                    ['id', 'user_id', 'created_at'],
                    [employee_id2, user_id2, defaultTimeStamp]
                ),

                // company employee roles
                db.insert.bind(
                    db,
                    'company_employee_roles',
                    ['id', 'role_id', 'company_id', 'employee_id', 'created_at'],
                    [uuidv1(), 1, company_id1, employee_id1, defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'company_employee_roles',
                    ['id', 'role_id', 'company_id', 'employee_id', 'created_at'],
                    [uuidv1(), 2, company_id1, employee_id2, defaultTimeStamp]
                ),

                // // crew employees
                db.insert.bind(
                    db,
                    'crew_employees',
                    ['id', 'company_id', 'employee_id', 'crew_id', 'created_at'],
                    [uuidv1(), company_id1, employee_id1, crew_id1, defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'crew_employees',
                    ['id', 'company_id', 'employee_id', 'crew_id', 'created_at'],
                    [uuidv1(), company_id1, employee_id2, crew_id1, defaultTimeStamp]
                ),

                // properties
                db.insert.bind(
                    db,
                    'properties',
                    ['id', 'user_id', 'name_property', 'created_at'],
                    [property_id_1, user_id1, 'Brett\'s house', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'properties',
                    ['id', 'user_id', 'name_property', 'created_at'],
                    [property_id_2, user_id2, 'Dal\'s house', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'properties',
                    ['id', 'user_id', 'name_property', 'created_at'],
                    [property_id_3, user_id3, 'Neal\'s house', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'properties',
                    ['id', 'user_id', 'name_property', 'created_at'],
                    [property_id_4, user_id1, 'Brett\'s second house', defaultTimeStamp]
                ),

                // property addresses
                db.insert.bind(
                    db,
                    'property_addresses',
                    [
                        'id',
                        'property_id',
                        'address_line_1',
                        'address_line_2',
                        'address_line_3',
                        'name_city',
                        'state',
                        'zipcode',
                        'created_at',
                    ],
                    [
                        property_address_id1,
                        property_id_1,
                        '1234 Bretticus St.',
                        null,
                        null,
                        'Flowers',
                        'OH',
                        '12345',
                        defaultTimeStamp,
                    ]
                ),
                db.insert.bind(
                    db,
                    'property_addresses',
                    [
                        'id',
                        'property_id',
                        'address_line_1',
                        'address_line_2',
                        'address_line_3',
                        'name_city',
                        'state',
                        'zipcode',
                        'created_at',
                    ],
                    [
                        property_address_id2,
                        property_id_2,
                        '1234 Dalicus St.',
                        null,
                        null,
                        'Trees',
                        'AZ',
                        '12345',
                        defaultTimeStamp,
                    ]
                ),
                db.insert.bind(
                    db,
                    'property_addresses',
                    [
                        'id',
                        'property_id',
                        'address_line_1',
                        'address_line_2',
                        'address_line_3',
                        'name_city',
                        'state',
                        'zipcode',
                        'created_at',
                    ],
                    [
                        property_address_id3,
                        property_id_3,
                        '1234 Nealicus St.',
                        null,
                        null,
                        'Birds',
                        'FL',
                        '12345',
                        defaultTimeStamp,
                    ]
                ),
                db.insert.bind(
                    db,
                    'property_addresses',
                    [
                        'id',
                        'property_id',
                        'address_line_1',
                        'address_line_2',
                        'address_line_3',
                        'name_city',
                        'state',
                        'zipcode',
                        'created_at',
                    ],
                    [
                        property_address_id4,
                        property_id_4,
                        '1234 Bretticus2 St.',
                        null,
                        null,
                        'Whales',
                        'OR',
                        '12345',
                        defaultTimeStamp,
                    ]
                ),

                // property rooms
                db.insert.bind(
                    db,
                    'property_rooms',
                    ['id', 'property_id', 'name_property_room', 'created_at'],
                    [1, property_id_1, 'Living room', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'property_rooms',
                    ['id', 'property_id', 'name_property_room', 'created_at'],
                    [2, property_id_2, 'Bedroom', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'property_rooms',
                    ['id', 'property_id', 'name_property_room', 'created_at'],
                    [3, property_id_3, 'Kitchen', defaultTimeStamp]
                ),
                db.insert.bind(
                    db,
                    'property_rooms',
                    ['id', 'property_id', 'name_property_room', 'created_at'],
                    [4, property_id_4, 'Bathroom', defaultTimeStamp]
                ),

                // property room fixtures
                db.insert.bind(
                    db,
                    'property_room_fixtures',
                    ['id', 'property_room_id', 'fixture_id'],
                    [property_room_fixture_id1, 1, 1]
                ),
                db.insert.bind(
                    db,
                    'property_room_fixtures',
                    ['id', 'property_room_id', 'fixture_id'],
                    [property_room_fixture_id2, 2, 2]
                ),
                db.insert.bind(
                    db,
                    'property_room_fixtures',
                    ['id', 'property_room_id', 'fixture_id'],
                    [property_room_fixture_id3, 3, 3]
                ),
                db.insert.bind(
                    db,
                    'property_room_fixtures',
                    ['id', 'property_room_id', 'fixture_id'],
                    [property_room_fixture_id4, 4, 4]
                ),

                // jobs
                db.insert.bind(
                    db,
                    'jobs',
                    [
                        'id',
                        'crew_id',
                        'user_id',
                        'property_id',
                        'date_scheduled',
                        'date_starts',
                        'estimated_duration',
                        'date_arrived',
                        'date_completed',
                        'tip_amount',
                        'created_at',
                    ],
                    [
                        job_id1,
                        crew_id1,
                        user_id1,
                        property_id_1,
                        '2018-09-25',
                        '2018-09-26',
                        2,
                        '2018-09-26',
                        '2018-09-26',
                        5.0,
                        defaultTimeStamp,
                    ]
                ),
                db.insert.bind(
                    db,
                    'jobs',
                    [
                        'id',
                        'crew_id',
                        'user_id',
                        'property_id',
                        'date_scheduled',
                        'date_starts',
                        'estimated_duration',
                        'date_arrived',
                        'date_completed',
                        'tip_amount',
                        'created_at',
                    ],
                    [
                        job_id2,
                        crew_id2,
                        user_id2,
                        property_id_2,
                        '2018-10-20',
                        '2018-10-21',
                        1,
                        '2018-10-21',
                        '2018-10-21',
                        10.0,
                        defaultTimeStamp,
                    ]
                ),
                db.insert.bind(
                    db,
                    'jobs',
                    [
                        'id',
                        'crew_id',
                        'user_id',
                        'property_id',
                        'date_scheduled',
                        'date_starts',
                        'estimated_duration',
                        'date_arrived',
                        'date_completed',
                        'tip_amount',
                        'created_at',
                    ],
                    [
                        job_id3,
                        crew_id3,
                        user_id3,
                        property_id_3,
                        '2019-01-05',
                        '2019-01-06',
                        3,
                        '2019-01-06',
                        '2019-01-06',
                        25.0,
                        defaultTimeStamp,
                    ]
                ),
                db.insert.bind(
                    db,
                    'jobs',
                    [
                        'id',
                        'crew_id',
                        'user_id',
                        'property_id',
                        'date_scheduled',
                        'date_starts',
                        'estimated_duration',
                        'date_arrived',
                        'date_completed',
                        'tip_amount',
                        'created_at',
                    ],
                    [
                        job_id4,
                        crew_id4,
                        user_id1,
                        property_id_4,
                        '2019-02-17',
                        '2019-02-18',
                        4,
                        '2019-02-18',
                        '2019-02-18',
                        20.0,
                        defaultTimeStamp,
                    ]
                ),

                // job rooms
                db.insert.bind(
                    db,
                    'job_rooms',
                    ['id', 'job_id', 'property_room_id', 'property_id'],
                    [job_room_id1, job_id1, 1, property_id_1]
                ),
                db.insert.bind(
                    db,
                    'job_rooms',
                    ['id', 'job_id', 'property_room_id', 'property_id'],
                    [job_room_id2, job_id2, 2, property_id_2]
                ),
                db.insert.bind(
                    db,
                    'job_rooms',
                    ['id', 'job_id', 'property_room_id', 'property_id'],
                    [job_room_id3, job_id3, 3, property_id_3]
                ),
                db.insert.bind(
                    db,
                    'job_rooms',
                    ['id', 'job_id', 'property_room_id', 'property_id'],
                    [job_room_id4, job_id4, 4, property_id_4]
                ),

                // job room fixtures
                db.insert.bind(
                    db,
                    'job_room_fixtures',
                    ['id', 'job_room_id', 'fixture_id'],
                    [job_room_fixture_id1, job_room_id1, 1]
                ),
                db.insert.bind(
                    db,
                    'job_room_fixtures',
                    ['id', 'job_room_id', 'fixture_id'],
                    [job_room_fixture_id2, job_room_id2, 2]
                ),
                db.insert.bind(
                    db,
                    'job_room_fixtures',
                    ['id', 'job_room_id', 'fixture_id'],
                    [job_room_fixture_id3, job_room_id3, 3]
                ),
                db.insert.bind(
                    db,
                    'job_room_fixtures',
                    ['id', 'job_room_id', 'fixture_id'],
                    [job_room_fixture_id4, job_room_id4, 4]
                ),

                // job room fixture tasks
                db.insert.bind(
                    db,
                    'job_room_fixture_tasks',
                    ['id', 'job_room_fixture_id', 'task_id'],
                    [job_room_fixture_task_id1, job_room_fixture_id1, 1]
                ),
                db.insert.bind(
                    db,
                    'job_room_fixture_tasks',
                    ['id', 'job_room_fixture_id', 'task_id'],
                    [job_room_fixture_task_id2, job_room_fixture_id2, 2]
                ),
                db.insert.bind(
                    db,
                    'job_room_fixture_tasks',
                    ['id', 'job_room_fixture_id', 'task_id'],
                    [job_room_fixture_task_id3, job_room_fixture_id3, 3]
                ),
                db.insert.bind(
                    db,
                    'job_room_fixture_tasks',
                    ['id', 'job_room_fixture_id', 'task_id'],
                    [job_room_fixture_task_id4, job_room_fixture_id4, 4]
                ),
            ],
            callback
        );
    });
};

exports.down = function(db, callback) {
    async.series(
        [
            db.runSql.bind(db, 'DELETE FROM companies'),
            db.runSql.bind(db, 'DELETE FROM company_addresses'),
            db.runSql.bind(db, 'DELETE FROM crews'),
            db.runSql.bind(db, 'DELETE FROM users'),
            db.runSql.bind(db, 'DELETE FROM employees'),
            db.runSql.bind(db, 'DELETE FROM company_employee_roles'),
            db.runSql.bind(db, 'DELETE FROM crew_employees'),
            db.runSql.bind(db, 'DELETE FROM properties'),
            db.runSql.bind(db, 'DELETE FROM property_addresses'),
            db.runSql.bind(db, 'DELETE FROM property_rooms'),
            db.runSql.bind(db, 'DELETE FROM property_room_fixtures'),
            db.runSql.bind(db, 'DELETE FROM jobs'),
            db.runSql.bind(db, 'DELETE FROM job_rooms'),
            db.runSql.bind(db, 'DELETE FROM job_room_fixtures'),
            db.runSql.bind(db, 'DELETE FROM job_room_fixture_tasks'),
        ],
        callback
    );
};

exports._meta = {
    version: 1,
};
