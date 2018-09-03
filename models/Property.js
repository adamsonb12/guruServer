const bookshelf = require('../config/bookshelf');

bookshelf.plugin('registry');

module.exports = bookshelf.model('Property', {
  tableName: 'users',
  defaults: {
    name_property: '',
  },
  hasTimeStamps: true,
});
