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
    async.series(
        [
            // roles table - name_role (id is autoincrement)
            db.insert.bind(db, 'roles', ['name_role', 'created_at'], ['owner', defaultTimeStamp]),
            db.insert.bind(db, 'roles', ['name_role', 'created_at'], ['employee', defaultTimeStamp]),
            db.insert.bind(db, 'roles', ['name_role', 'created_at'], ['employee_crew_leader', defaultTimeStamp]),
            db.insert.bind(db, 'roles', ['name_role', 'created_at'], ['admin', defaultTimeStamp]),
            // fixtures - name_fixture (id is auto increment) => We need a better well thought out list for this data set, but here are some examples
            db.insert.bind(db, 'fixtures', ['name_fixture', 'created_at'], ['floor', defaultTimeStamp]),
            db.insert.bind(db, 'fixtures', ['name_fixture', 'created_at'], ['walls', defaultTimeStamp]),
            db.insert.bind(db, 'fixtures', ['name_fixture', 'created_at'], ['baseboards', defaultTimeStamp]),
            db.insert.bind(db, 'fixtures', ['name_fixture', 'created_at'], ['counter_tops', defaultTimeStamp]),
            db.insert.bind(db, 'fixtures', ['name_fixture', 'created_at'], ['sink', defaultTimeStamp]),
            db.insert.bind(db, 'fixtures', ['name_fixture', 'created_at'], ['stove', defaultTimeStamp]),
            db.insert.bind(db, 'fixtures', ['name_fixture', 'created_at'], ['oven', defaultTimeStamp]),
            // tasks table - name_task (id is autoincrement)
            db.insert.bind(db, 'tasks', ['name_task', 'created_at'], ['sweep', defaultTimeStamp]),
            db.insert.bind(db, 'tasks', ['name_task', 'created_at'], ['mop', defaultTimeStamp]),
            db.insert.bind(db, 'tasks', ['name_task', 'created_at'], ['vacuum', defaultTimeStamp]),
            db.insert.bind(db, 'tasks', ['name_task', 'created_at'], ['dust', defaultTimeStamp]),
            db.insert.bind(db, 'tasks', ['name_task', 'created_at'], ['wipe', defaultTimeStamp]),
            // fixture tasks table
            db.insert.bind(db, 'fixtures_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 1, 1]),
            db.insert.bind(db, 'fixtures_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 1, 2]),
            db.insert.bind(db, 'fixtures_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 1, 3]),
            db.insert.bind(db, 'fixtures_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 2, 4]),
            db.insert.bind(db, 'fixtures_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 2, 5]),
            db.insert.bind(db, 'fixtures_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 3, 4]),
            db.insert.bind(db, 'fixtures_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 3, 5]),
            db.insert.bind(db, 'fixtures_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 4, 5]),
            db.insert.bind(db, 'fixtures_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 5, 5]),
            db.insert.bind(db, 'fixtures_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 6, 5]),
            db.insert.bind(db, 'fixtures_tasks', ['id', 'fixture_id', 'task_id'], [uuidv1(), 7, 5]),
        ],
        callback
    );
};

exports.down = function(db, callback) {
    async.series(
        [
            // roles table
            db.runSql.bind(db, 'DELETE FROM roles'),
            // fixtures table
            db.runSql.bind(db, 'DELETE FROM fixtures'),
            // tasks table
            db.runSql.bind(db, 'DELETE FROM tasks'),
            // feature-tasks
            db.runSql.bind(db, 'DELETE FROM fixtures_tasks'),
        ],
        callback
    );
};

exports._meta = {
    version: 1,
};
