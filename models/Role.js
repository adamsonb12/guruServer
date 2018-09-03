const bookshelf = require('../config/bookshelf');

bookshelf.plugin('registry');

module.exports = bookshelf.model('Role', {
  tableName: 'roles',
  defaults: {
    name_role: '',
  },
  hasTimeStamps: true,
});
