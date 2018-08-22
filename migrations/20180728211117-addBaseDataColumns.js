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
      // users table
      db.removeColumn.bind(db, 'users', 'name_first', { ifExists: true }),
      db.removeColumn.bind(db, 'users', 'name_last', { ifExists: true }),
      db.removeColumn.bind(db, 'users', 'name_middle', { ifExists: true }),
      db.removeColumn.bind(db, 'users', 'email', { ifExists: true }),
      db.removeColumn.bind(db, 'users', 'password', { ifExists: true }),
      db.removeColumn.bind(db, 'users', 'date_birth', { ifExists: true }),
      // roles table
      db.removeColumn.bind(db, 'roles', 'name_role', { ifExists: true }),
      // fixtures table
      db.removeColumn.bind(db, 'fixtures', 'name_fixture', { ifExists: true }),
      // tasks table
      db.removeColumn.bind(db, 'tasks', 'name_task', { ifExists: true }),
      // companies table
      db.removeColumn.bind(db, 'companies', 'name_company', { ifExists: true }),
      db.removeColumn.bind(db, 'companies', 'shortname_company', { ifExists: true }),
      // company addresses
      db.removeColumn.bind(db, 'company_addresses', 'address_line_1', { ifExists: true }),
      db.removeColumn.bind(db, 'company_addresses', 'address_line_2', { ifExists: true }),
      db.removeColumn.bind(db, 'company_addresses', 'address_line_3', { ifExists: true }),
      db.removeColumn.bind(db, 'company_addresses', 'name_city', { ifExists: true }),
      db.removeColumn.bind(db, 'company_addresses', 'state', { ifExists: true }),
      db.removeColumn.bind(db, 'company_addresses', 'zipcode', { ifExists: true }),
      // properties table
      db.removeColumn.bind(db, 'properties', 'name_property', { ifExists: true }),
      // property addresses
      db.removeColumn.bind(db, 'property_addresses', 'address_line_1', { ifExists: true }),
      db.removeColumn.bind(db, 'property_addresses', 'address_line_2', { ifExists: true }),
      db.removeColumn.bind(db, 'property_addresses', 'address_line_3', { ifExists: true }),
      db.removeColumn.bind(db, 'property_addresses', 'name_city', { ifExists: true }),
      db.removeColumn.bind(db, 'property_addresses', 'state', { ifExists: true }),
      db.removeColumn.bind(db, 'property_addresses', 'zipcode', { ifExists: true }),
      // property_rooms table
      db.removeColumn.bind(db, 'property_rooms', 'name_property_room', { ifExists: true }),
      // crews table
      db.removeColumn.bind(db, 'crews', 'name_crew', { ifExists: true }),
      // jobs table
      db.removeColumn.bind(db, 'jobs', 'date_scheduled', { ifExists: true }),
      db.removeColumn.bind(db, 'jobs', 'date_starts', { ifExists: true }),
      db.removeColumn.bind(db, 'jobs', 'estimated_duration', { ifExists: true }),
      db.removeColumn.bind(db, 'jobs', 'date_arrived', { ifExists: true }),
      db.removeColumn.bind(db, 'jobs', 'date_completed', { ifExists: true }),
      db.removeColumn.bind(db, 'jobs', 'tip_amount', { ifExists: true }),
    ],
    callback
  );
};

exports._meta = {
  version: 1,
};
