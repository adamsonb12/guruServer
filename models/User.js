const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

require('./Property');
bookshelf.plugin('registry');

module.exports = bookshelf.model('User', {
  tableName: 'users',
  defaults: {
    id: uuidv1(),
    name_first: '',
    name_last: '',
    name_middle: '',
    email: '',
    password: '',
    date_birth: '',
  },
  properties: function() {
    return this.hasMany('Property');
  },
  hasTimeStamps: true,
});
