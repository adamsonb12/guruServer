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
 * 
 * type - the column data type. Supported types can be found in db-migrate-shared/data_type.js
length - the column data length, where supported
primaryKey - true to set the column as a primary key. Compound primary keys are supported by setting the  primaryKey option to true on multiple columns
autoIncrement - true to mark the column as auto incrementing
notNull - true to mark the column as non-nullable, omit it archive database default behavior and false to mark explicitly as nullable
unique - true to add unique constraint to the column
defaultValue - set the column default value. To set an expression (eg a function call) as the default value use this syntax: defaultValue: new String('uuid_generate_v4()')
foreignKey - set a foreign key to the column

 */
exports.setup = function(options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function(db, callback) {
    async.series(
        [
            // users table
            db.addColumn.bind(db, 'users', 'name_first', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'users', 'name_last', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'users', 'name_middle', {
                type: dataType.STRING,
                length: 50,
                notNull: false,
            }),
            db.addColumn.bind(db, 'users', 'email', {
                type: dataType.STRING,
                length: 75,
                notNull: true,
            }),
            db.addColumn.bind(db, 'users', 'password', {
                type: dataType.STRING,
                length: 35,
                notNull: true,
            }),
            db.addColumn.bind(db, 'users', 'date_birth', {
                type: dataType.DATE,
                notNull: false,
            }),
            // roles table
            db.addColumn.bind(db, 'roles', 'name_role', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            // fixtures table
            db.addColumn.bind(db, 'fixtures', 'name_fixture', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            // tasks table
            db.addColumn.bind(db, 'tasks', 'name_task', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            // companies table
            db.addColumn.bind(db, 'companies', 'name_company', {
                type: dataType.STRING,
                length: 100,
                notNull: true,
            }),
            db.addColumn.bind(db, 'companies', 'shortname_company', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            // company addressess table
            db.addColumn.bind(db, 'company_addresses', 'address_line_1', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'company_addresses', 'address_line_2', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'company_addresses', 'address_line_3', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'company_addresses', 'name_city', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'company_addresses', 'state', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'company_addresses', 'zipcode', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            // properties table
            db.addColumn.bind(db, 'properties', 'name_property', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            // property addresses
            db.addColumn.bind(db, 'property_addresses', 'address_line_1', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'property_addresses', 'address_line_2', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'property_addresses', 'address_line_3', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'property_addresses', 'name_city', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'property_addresses', 'state', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            db.addColumn.bind(db, 'property_addresses', 'zipcode', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            // property_rooms
            db.addColumn.bind(db, 'property_rooms', 'name_property_room', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            // crews table
            db.addColumn.bind(db, 'crews', 'name_crew', {
                type: dataType.STRING,
                length: 50,
                notNull: true,
            }),
            // jobs table => this will definetely need more
            db.addColumn.bind(db, 'jobs', 'date_scheduled', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'jobs', 'date_starts', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'jobs', 'estimated_duration', {
                type: dataType.INTEGER,
                unsigned: true,
                notNull: true,
            }),
            db.addColumn.bind(db, 'jobs', 'date_arrived', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'jobs', 'date_completed', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'jobs', 'tip_amount', {
                type: dataType.DECIMAL,
                notNull: true,
            }),
        ],
        callback
    );
};

exports.down = function(db, callback) {
    async.series(
        [
            // jobs table
            db.removeColumn.bind(db, 'jobs', 'date_scheduled'),
            db.removeColumn.bind(db, 'jobs', 'date_starts'),
            db.removeColumn.bind(db, 'jobs', 'estimated_duration'),
            db.removeColumn.bind(db, 'jobs', 'date_arrived'),
            db.removeColumn.bind(db, 'jobs', 'date_completed'),
            db.removeColumn.bind(db, 'jobs', 'tip_amount'),
            // property_rooms table
            db.removeColumn.bind(db, 'property_rooms', 'name_property_room'),
            // property addresses
            db.removeColumn.bind(db, 'property_addresses', 'address_line_1'),
            db.removeColumn.bind(db, 'property_addresses', 'address_line_2'),
            db.removeColumn.bind(db, 'property_addresses', 'address_line_3'),
            db.removeColumn.bind(db, 'property_addresses', 'name_city'),
            db.removeColumn.bind(db, 'property_addresses', 'state'),
            db.removeColumn.bind(db, 'property_addresses', 'zipcode'),
            // crews table
            db.removeColumn.bind(db, 'crews', 'name_crew'),
            // properties table
            db.removeColumn.bind(db, 'properties', 'name_property'),
            // company addresses
            db.removeColumn.bind(db, 'company_addresses', 'address_line_1'),
            db.removeColumn.bind(db, 'company_addresses', 'address_line_2'),
            db.removeColumn.bind(db, 'company_addresses', 'address_line_3'),
            db.removeColumn.bind(db, 'company_addresses', 'name_city'),
            db.removeColumn.bind(db, 'company_addresses', 'state'),
            db.removeColumn.bind(db, 'company_addresses', 'zipcode'),
            // companies table
            db.removeColumn.bind(db, 'companies', 'name_company'),
            db.removeColumn.bind(db, 'companies', 'shortname_company'),
            // users table
            db.removeColumn.bind(db, 'users', 'name_first'),
            db.removeColumn.bind(db, 'users', 'name_last'),
            db.removeColumn.bind(db, 'users', 'name_middle'),
            db.removeColumn.bind(db, 'users', 'email'),
            db.removeColumn.bind(db, 'users', 'password'),
            db.removeColumn.bind(db, 'users', 'date_birth'),
            // roles table
            db.removeColumn.bind(db, 'roles', 'name_role'),
            // fixtures table
            db.removeColumn.bind(db, 'fixtures', 'name_fixture'),
            // tasks table
            db.removeColumn.bind(db, 'tasks', 'name_task'),
        ],
        callback
    );
};

exports._meta = {
    version: 1,
};
