// This is the migration for creating our core data, which could also be used in production
// It should add our base fields for the roles, fixtures, tasks, and feature_tasks tables.
// Most of these things will change as we get more requirements from Dal and Morgan

'use strict';
const dataTypes = require('db-migrate-shared');
const async = require('async');
const uuidv1 = require('uuid/v1');

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
      // roles table - name_role (id is autoincrement)
      db.insert.bind(db, 'roles', ['name_role'], ['owner']),
      db.insert.bind(db, 'roles', ['name_role'], ['employee']),
      db.insert.bind(db, 'roles', ['name_role'], ['employee_crew_leader']),
      db.insert.bind(db, 'roles', ['name_role'], ['admin']),
      // fixtures - name_fixture (id is auto increment) => We need a better well thought out list for this data set, but here are some examples
      db.insert.bind(db, 'fixtures', ['id', 'name_fixture'], [1, 'floor']),
      db.insert.bind(db, 'fixtures', ['id', 'name_fixture'], [2, 'walls']),
      db.insert.bind(db, 'fixtures', ['id', 'name_fixture'], [3, 'baseboards']),
      db.insert.bind(db, 'fixtures', ['id', 'name_fixture'], [4, 'counter_tops']),
      db.insert.bind(db, 'fixtures', ['id', 'name_fixture'], [5, 'sink']),
      db.insert.bind(db, 'fixtures', ['id', 'name_fixture'], [6, 'stove']),
      db.insert.bind(db, 'fixtures', ['id', 'name_fixture'], [7, 'oven']),
      // tasks table - name_task (id is autoincrement)
      db.insert.bind(db, 'tasks', ['id', 'name_task'], [1, 'sweep']),
      db.insert.bind(db, 'tasks', ['id', 'name_task'], [2, 'mop']),
      db.insert.bind(db, 'tasks', ['id', 'name_task'], [3, 'vacuum']),
      db.insert.bind(db, 'tasks', ['id', 'name_task'], [4, 'dust']),
      db.insert.bind(db, 'tasks', ['id', 'name_task'], [5, 'wipe']),
      // fixture tasks table
      db.insert.bind(db, 'fixture_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 1, 1]),
      db.insert.bind(db, 'fixture_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 1, 2]),
      db.insert.bind(db, 'fixture_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 1, 3]),
      db.insert.bind(db, 'fixture_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 2, 4]),
      db.insert.bind(db, 'fixture_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 2, 5]),
      db.insert.bind(db, 'fixture_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 3, 4]),
      db.insert.bind(db, 'fixture_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 3, 5]),
      db.insert.bind(db, 'fixture_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 4, 5]),
      db.insert.bind(db, 'fixture_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 5, 5]),
      db.insert.bind(db, 'fixture_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 6, 5]),
      db.insert.bind(db, 'fixture_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 7, 5]),
    ],
    callback
  );
};

exports.down = function(db, callback) {
  async.series(
    [
      // roles table
      db.runSql.bind(db, `DELETE FROM roles`),
      // fixtures table
      db.runSql.bind(db, `DELETE FROM fixtures`),
      // tasks table
      db.runSql.bind(db, `DELETE FROM tasks`),
      // feature-tasks
      db.runSql.bind(db, `DELETE FROM fixture_tasks`),
    ],
    callback
  );
};

exports._meta = {
  version: 1,
};
