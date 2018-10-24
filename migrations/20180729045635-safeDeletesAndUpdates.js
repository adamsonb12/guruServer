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
            // 0 level tables
            // users table
            db.addColumn.bind(db, 'users', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'users', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'users', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'users', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // companies table
            db.addColumn.bind(db, 'companies', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'companies', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'companies', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'companies', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // roles table
            db.addColumn.bind(db, 'roles', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'roles', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'roles', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'roles', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // fixtures table
            db.addColumn.bind(db, 'fixtures', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'fixtures', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'fixtures', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'fixtures', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // tasks table
            db.addColumn.bind(db, 'tasks', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'tasks', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'tasks', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'tasks', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // level 1 tables
            // company_addresses table
            db.addColumn.bind(db, 'company_addresses', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'company_addresses', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'company_addresses', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'company_addresses', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // crews table
            db.addColumn.bind(db, 'crews', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'crews', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'crews', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'crews', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // employees table
            db.addColumn.bind(db, 'employees', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'employees', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'employees', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'employees', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // properties table
            db.addColumn.bind(db, 'properties', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'properties', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'properties', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'properties', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // level 2 ttables
            // company_employee_roles table
            db.addColumn.bind(db, 'company_employee_roles', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'company_employee_roles', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'company_employee_roles', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'company_employee_roles', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // jobs table
            db.addColumn.bind(db, 'jobs', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'jobs', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'jobs', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'jobs', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // property_addresses table
            db.addColumn.bind(db, 'property_addresses', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'property_addresses', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'property_addresses', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'property_addresses', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // property_rooms table
            db.addColumn.bind(db, 'property_rooms', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'property_rooms', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'property_rooms', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'property_rooms', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            // level 3 tables
            // crew_employees table
            db.addColumn.bind(db, 'crew_employees', 'created_at', {
                type: dataType.TIMESTAMP,
                notNull: true,
            }),
            db.addColumn.bind(db, 'crew_employees', 'updated_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'crew_employees', 'deleted_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
            db.addColumn.bind(db, 'crew_employees', 'restored_at', {
                type: dataType.TIMESTAMP,
                notNull: false,
            }),
        ],
        callback
    );
};

exports.down = function(db, callback) {
    async.series(
        [
            // 0 level tables
            // users table
            db.removeColumn.bind(db, 'users', 'created_at'),
            db.removeColumn.bind(db, 'users', 'updated_at'),
            db.removeColumn.bind(db, 'users', 'deleted_at'),
            db.removeColumn.bind(db, 'users', 'restored_at'),
            // companies table
            db.removeColumn.bind(db, 'companies', 'created_at'),
            db.removeColumn.bind(db, 'companies', 'updated_at'),
            db.removeColumn.bind(db, 'companies', 'deleted_at'),
            db.removeColumn.bind(db, 'companies', 'restored_at'),
            // roles table
            db.removeColumn.bind(db, 'roles', 'created_at'),
            db.removeColumn.bind(db, 'roles', 'updated_at'),
            db.removeColumn.bind(db, 'roles', 'deleted_at'),
            db.removeColumn.bind(db, 'roles', 'restored_at'),
            // fixtures table
            db.removeColumn.bind(db, 'fixtures', 'created_at'),
            db.removeColumn.bind(db, 'fixtures', 'updated_at'),
            db.removeColumn.bind(db, 'fixtures', 'deleted_at'),
            db.removeColumn.bind(db, 'fixtures', 'restored_at'),
            // tasks table
            db.removeColumn.bind(db, 'tasks', 'created_at'),
            db.removeColumn.bind(db, 'tasks', 'updated_at'),
            db.removeColumn.bind(db, 'tasks', 'deleted_at'),
            db.removeColumn.bind(db, 'tasks', 'restored_at'),
            // level 1 tables
            // company_addresses table
            db.removeColumn.bind(db, 'company_addresses', 'created_at'),
            db.removeColumn.bind(db, 'company_addresses', 'updated_at'),
            db.removeColumn.bind(db, 'company_addresses', 'deleted_at'),
            db.removeColumn.bind(db, 'company_addresses', 'restored_at'),
            // crews table
            db.removeColumn.bind(db, 'crews', 'created_at'),
            db.removeColumn.bind(db, 'crews', 'updated_at'),
            db.removeColumn.bind(db, 'crews', 'deleted_at'),
            db.removeColumn.bind(db, 'crews', 'restored_at'),
            // employees table
            db.removeColumn.bind(db, 'employees', 'created_at'),
            db.removeColumn.bind(db, 'employees', 'updated_at'),
            db.removeColumn.bind(db, 'employees', 'deleted_at'),
            db.removeColumn.bind(db, 'employees', 'restored_at'),
            // properties table
            db.removeColumn.bind(db, 'properties', 'created_at'),
            db.removeColumn.bind(db, 'properties', 'updated_at'),
            db.removeColumn.bind(db, 'properties', 'deleted_at'),
            db.removeColumn.bind(db, 'properties', 'restored_at'),
            // level 2 tables
            // company_employee_roles table
            db.removeColumn.bind(db, 'company_employee_roles', 'created_at'),
            db.removeColumn.bind(db, 'company_employee_roles', 'updated_at'),
            db.removeColumn.bind(db, 'company_employee_roles', 'deleted_at'),
            db.removeColumn.bind(db, 'company_employee_roles', 'restored_at'),
            // jobs table
            db.removeColumn.bind(db, 'jobs', 'created_at'),
            db.removeColumn.bind(db, 'jobs', 'updated_at'),
            db.removeColumn.bind(db, 'jobs', 'deleted_at'),
            db.removeColumn.bind(db, 'jobs', 'restored_at'),
            // property_addresses table
            db.removeColumn.bind(db, 'property_addresses', 'created_at'),
            db.removeColumn.bind(db, 'property_addresses', 'updated_at'),
            db.removeColumn.bind(db, 'property_addresses', 'deleted_at'),
            db.removeColumn.bind(db, 'property_addresses', 'restored_at'),
            // property_rooms table
            db.removeColumn.bind(db, 'property_rooms', 'created_at'),
            db.removeColumn.bind(db, 'property_rooms', 'updated_at'),
            db.removeColumn.bind(db, 'property_rooms', 'deleted_at'),
            db.removeColumn.bind(db, 'property_rooms', 'restored_at'),
            // level 3 tables
            // crew_employees table
            db.removeColumn.bind(db, 'crew_employees', 'created_at'),
            db.removeColumn.bind(db, 'crew_employees', 'updated_at'),
            db.removeColumn.bind(db, 'crew_employees', 'deleted_at'),
            db.removeColumn.bind(db, 'crew_employees', 'restored_at'),
        ],
        callback
    );
};

exports._meta = {
    version: 1,
};
