'use strict';
const dataTypes = require('db-migrate-shared');
const async = require('async');

let dbm;
let type;
let seed;
const dataType = dataTypes.dataType;

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
    async.series(
        [
            // step 0 tables
            db.createTable.bind(db, 'users', {
                id: { type: dataType.STRING, primaryKey: true },
            }),
            db.createTable.bind(db, 'roles', {
                id: { type: dataType.INTEGER, primaryKey: true, autoIncrement: true, unsigned: true },
            }),
            db.createTable.bind(db, 'fixtures', {
                id: { type: dataType.INTEGER, primaryKey: true, autoIncrement: true, unsigned: true },
            }),
            db.createTable.bind(db, 'tasks', {
                id: { type: dataType.INTEGER, primaryKey: true, autoIncrement: true, unsigned: true },
            }),
            db.createTable.bind(db, 'companies', {
                id: { type: dataType.STRING, primaryKey: true, length: 36 },
            }),
            // step 1 tables
            db.createTable.bind(db, 'company_addresses', {
                id: { type: dataType.INTEGER, primaryKey: true, autoIncrement: true },
                company_id: {
                    type: dataType.STRING,
                    unsigned: true,
                    length: 36,
                    notNull: true,
                    foreignKey: {
                        name: 'company_address_company_fk',
                        table: 'companies',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
            db.createTable.bind(db, 'employees', {
                id: { type: dataType.STRING, primaryKey: true },
                user_id: {
                    type: dataType.STRING,
                    unsigned: true,
                    length: 36,
                    notNull: true,
                    foreignKey: {
                        name: 'employee_users_fk',
                        table: 'users',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
            db.createTable.bind(db, 'properties', {
                id: { type: dataType.STRING, primaryKey: true },
                user_id: {
                    type: dataType.STRING,
                    unsigned: true,
                    length: 36,
                    notNull: true,
                    foreignKey: {
                        name: 'property_user_fk',
                        table: 'users',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
            db.createTable.bind(db, 'fixtures_tasks', {
                id: { type: dataType.STRING, primaryKey: true },
                fixture_id: {
                    type: dataType.INTEGER,
                    unsigned: true,
                    notNull: true,
                    foreignKey: {
                        name: 'fixtures_tasks_fixture_fk',
                        table: 'fixtures',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
                task_id: {
                    type: dataType.INTEGER,
                    unsigned: true,
                    notNull: true,
                    foreignKey: {
                        name: 'fixtures_tasks_task_fk',
                        table: 'tasks',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
            db.createTable.bind(db, 'crews', {
                id: { type: dataType.STRING, primaryKey: true, length: 36 },
                company_id: {
                    type: dataType.STRING,
                    notNull: true,
                    foreignKey: {
                        name: 'crew_company_fk',
                        table: 'companies',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
            db.addIndex.bind(db, 'crews', 'crews_crew_id_company_id_unique', ['id', 'company_id'], true),
            // step 2 tables
            db.createTable.bind(db, 'property_addresses', {
                id: { type: dataType.STRING, primaryKey: true },
                property_id: {
                    type: dataType.STRING,
                    unsigned: true,
                    notNull: true,
                    foreignKey: {
                        name: 'property_address_property_fk',
                        table: 'properties',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
            db.createTable.bind(db, 'company_employee_roles', {
                id: { type: dataType.STRING, primaryKey: true },
                role_id: {
                    type: dataType.INTEGER,
                    unsigned: true,
                    notNull: true,
                    foreignKey: {
                        name: 'company_employee_role_role_fk',
                        table: 'roles',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
                company_id: {
                    type: dataType.STRING,
                    notNull: true,
                    foreignKey: {
                        name: 'company_employee_role_company_fk',
                        table: 'companies',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
                employee_id: {
                    type: dataType.STRING,
                    notNull: true,
                    foreignKey: {
                        name: 'company_employee_role_employee_fk',
                        table: 'employees',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
            db.addIndex.bind(
                db,
                'company_employee_roles',
                'company_employee_roles_company_id_employee_id_unique',
                ['company_id', 'employee_id'],
                true
            ),
            db.createTable.bind(db, 'property_rooms', {
                id: { type: dataType.INTEGER, primaryKey: true, autoIncrement: true },
                property_id: {
                    type: dataType.STRING,
                    unsigned: true,
                    notNull: true,
                    foreignKey: {
                        name: 'property_room_property_fk',
                        table: 'properties',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
            db.addIndex.bind(db, 'property_rooms', 'property_rooms_id_property_id_unique', ['id', 'property_id'], true),
            db.createTable.bind(db, 'jobs', {
                id: { type: dataType.STRING, primaryKey: true },
                crew_id: {
                    type: dataType.STRING,
                    notNull: true,
                    foreignKey: {
                        name: 'job_crew_fk',
                        table: 'crews',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
                user_id: {
                    type: dataType.STRING,
                    notNull: true,
                    foreignKey: {
                        name: 'job_user_fk',
                        table: 'users',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
                property_id: {
                    type: dataType.STRING,
                    notNull: true,
                    foreignKey: {
                        name: 'job_property_fk',
                        table: 'properties',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
            db.addIndex.bind(db, 'jobs', 'jobs_id_property_id_unique', ['id', 'property_id'], true),
            // step 3 tables
            db.createTable.bind(db, 'crew_employees', {
                id: { type: dataType.STRING, primaryKey: true },
                company_id: { type: dataType.STRING },
                employee_id: { type: dataType.STRING },
                crew_id: { type: dataType.STRING },
            }),
            db.addForeignKey.bind(
                db,
                'crew_employees',
                'company_employee_roles',
                'crew_employees_company_employee_roles_fk',
                {
                    company_id: 'company_id',
                    employee_id: 'employee_id',
                },
                {
                    onDelete: 'CASCADE',
                    onUpdate: 'RESTRICT',
                }
            ),
            db.addForeignKey.bind(
                db,
                'crew_employees',
                'crews',
                'crew_employees_crews_fk',
                {
                    crew_id: 'id',
                    company_id: 'company_id',
                },
                {
                    onDelete: 'CASCADE',
                    onUpdate: 'RESTRICT',
                }
            ),
            db.createTable.bind(db, 'property_room_fixtures', {
                id: { type: dataType.STRING, primaryKey: true },
                property_room_id: {
                    type: dataType.INTEGER,
                    notNull: true,
                    foreignKey: {
                        name: 'property_room_fixtures_property_rooms_fk',
                        table: 'property_rooms',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
                fixture_id: {
                    type: dataType.INTEGER,
                    unsigned: true,
                    notNull: true,
                    foreignKey: {
                        name: 'property_room_fixtures_fixture_fk',
                        table: 'fixtures',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
            db.createTable.bind(db, 'job_rooms', {
                id: { type: dataType.STRING, primaryKey: true },
                job_id: { type: dataType.STRING },
                property_room_id: { type: dataType.INTEGER },
                property_id: { type: dataType.STRING },
            }),
            db.addForeignKey.bind(
                db,
                'job_rooms',
                'jobs',
                'job_rooms_jobs_fk',
                {
                    job_id: 'id',
                    property_id: 'property_id',
                },
                {
                    onDelete: 'CASCADE',
                    onUpdate: 'RESTRICT',
                }
            ),
            db.addForeignKey.bind(
                db,
                'job_rooms',
                'property_rooms',
                'job_rooms_property_rooms_fk',
                {
                    property_room_id: 'id',
                    property_id: 'property_id',
                },
                {
                    onDelete: 'CASCADE',
                    onUpdate: 'RESTRICT',
                }
            ),
            // step 4 tables
            db.createTable.bind(db, 'job_room_fixtures', {
                id: { type: dataType.STRING, primaryKey: true },
                job_room_id: {
                    type: dataType.STRING,
                    notNull: true,
                    foreignKey: {
                        name: 'job_room_fixtures_job_rooms_fk',
                        table: 'job_rooms',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
                fixture_id: {
                    type: dataType.INTEGER,
                    unsigned: true,
                    notNull: true,
                    foreignKey: {
                        name: 'job_rooms_fixtures_fixtures_fk',
                        table: 'fixtures',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
            // step 5 tables
            db.createTable.bind(db, 'job_room_fixture_tasks', {
                id: { type: dataType.STRING, primaryKey: true },
                job_room_fixture_id: {
                    type: dataType.STRING,
                    notNull: true,
                    foreignKey: {
                        name: 'job_room_fixture_tasks_job_room_fixtures_fk',
                        table: 'job_room_fixtures',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
                task_id: {
                    type: dataType.INTEGER,
                    unsigned: true,
                    notNull: true,
                    foreignKey: {
                        name: 'job_room_fixture_tasks_task_fk',
                        table: 'tasks',
                        rules: {
                            onDelete: 'CASCADE',
                            onUpdate: 'RESTRICT',
                        },
                        mapping: 'id',
                    },
                },
            }),
        ],
        callback
    );
};

exports.down = function(db, callback) {
    async.series(
        [
            // step 5 tables
            db.dropTable.bind(db, 'job_room_fixture_tasks', { ifExists: true }),
            // step 4 tables
            db.dropTable.bind(db, 'job_room_fixtures', { ifExists: true }),
            // step 3 tables
            db.dropTable.bind(db, 'job_rooms', { ifExists: true }),
            db.dropTable.bind(db, 'crew_employees', { ifExists: true }),
            db.dropTable.bind(db, 'property_room_fixtures', { ifExists: true }),
            // step 2 tables
            db.dropTable.bind(db, 'jobs', { ifExists: true }),
            db.dropTable.bind(db, 'company_employee_roles', { ifExists: true }),
            db.dropTable.bind(db, 'property_rooms', { ifExists: true }),
            db.dropTable.bind(db, 'property_addresses', { ifExists: true }),
            // step 1 tables
            db.dropTable.bind(db, 'crews', { ifExists: true }),
            db.dropTable.bind(db, 'employees', { ifExists: true }),
            db.dropTable.bind(db, 'properties', { ifExists: true }),
            db.dropTable.bind(db, 'fixtures_tasks', { ifExists: true }),
            db.dropTable.bind(db, 'company_addresses', { ifExists: true }),
            // step 0 tables
            db.dropTable.bind(db, 'companies', { ifExists: true }),
            db.dropTable.bind(db, 'users', { ifExists: true }),
            db.dropTable.bind(db, 'roles', { ifExists: true }),
            db.dropTable.bind(db, 'fixtures', { ifExists: true }),
            db.dropTable.bind(db, 'tasks', { ifExists: true }),
        ],
        callback
    );
};

exports._meta = {
    version: 1,
};
