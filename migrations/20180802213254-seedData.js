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

exports.up = function(db) {
  async.series(
    [
      // users table
        // You're gonna want to have multiple users here for seed data => at least one customer, 
        // at least on employee, and at least one employee who is an owner (you may have to create 
        // the data for roles first for that, and you can create the users first though and then 
        // the roles, and then the additions the employee company roles table thing)

        // Core seed => level 0 tables excluding users and companies (roles, tasks, fixtures)
        // Test seed data => make a new migration for the base data => see above comment
      db.insert.bind(db, 'users', // see docs on how this works
      [''], 
      ['name_first'], {
      }),
    ],
    callback
  );
};

exports.down = function(db) {
  async.series(
    [
      // users table
      db.removeColumn.bind(db, 'users', 'name_first'), // This will have to change to the custom sql statement
    ],
    callback
  );
};

exports._meta = {
  "version": 1
};
