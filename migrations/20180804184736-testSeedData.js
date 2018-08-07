// This is the migration for creating our testing data => 
// feel free to edit it if necessary, and add to it all you need. 

'use strict';
const dataTypes = require('db-migrate-shared');
const async = require('async');
const uuidv1 = require('uuid/v1');

let dbm;
let type;
let seed;
const dataType = dataTypes.dataType;
let company_id = uuidv1();

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
      // users table - name_first, name_last, name_middle, email, password, dob
      db.insert.bind(db, 'users',
        ['id', 'name_first', 'name_last', 'name_middle', 'email', 'password', 'date_birth'],
        [uuidv1(), 'Luke', 'Skywalker', null, 'wompratkiller@test.com', 'guest', "1951-09-25"]
      ),
      db.insert.bind(db, 'users',
        ['id', 'name_first', 'name_last', 'name_middle', 'email', 'password', 'date_birth'],
        [uuidv1(), 'Darth', 'Vader', 'Anakin', 'slayerofyounglings@test.com', 'guest', "1931-01-17"]
      ),
      db.insert.bind(db, 'users',
        ['id', 'name_first', 'name_last', 'name_middle', 'email', 'password', 'date_birth'],
        [uuidv1(), 'Obiwan', 'Kenobi', null, 'hellothere@test.com', 'guest', "1971-03-31"]
      ),
      db.insert.bind(db, 'users',
        ['id', 'name_first', 'name_last', 'name_middle', 'email', 'password', 'date_birth'],
        [uuidv1(), 'Sheev', 'Palpatine', 'Emperor', 'ultimatepower@test.com', 'guest', "1944-08-11"]
      ),
      // companies - name_company, shortname_company
      db.insert.bind(db, 'companies',
        ['id', 'name_company', 'shortname_company'],
        [company_id, 'Martha & Company', 'Marta & Co.']
      ),
      // company_addresses table - company_id, address_line_1, address_line_2, address_line_3, name_city, state, zipcode
      // db.insert.bind(db, 'company_addresses',
      //   ['company_id', 'address_line_1', 'address_line_2', 'address_line_3', 'name_city', 'state', 'zipcode'],
      //   [company_id, '1234 Guru St.', null, null, '']
      // ),
    ],
    callback
  );
};

exports.down = function(db, callback) {
  async.series(
    [
      db.runSql.bind(db, `DELETE FROM users`),
      db.runSql.bind(db, `DELETE FROM companies`),
      db.runSql.bind(db, `DELETE FROM company_addresses`),
    ],
    callback
  );
};

exports._meta = {
  "version": 1
};
