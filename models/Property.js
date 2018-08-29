const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

module.exports = bookshelf.model('User', {
  tableName: 'properties',
  defaults: {
    name_property: ''
  },
  hasTimeStamps: true,
});
