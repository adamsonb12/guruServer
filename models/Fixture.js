const bookshelf = require('../config/bookshelf');

bookshelf.plugin('registry');

module.exports = bookshelf.model('Fixture', {
  tableName: 'fixtures',
  defaults: {
    name_fixture: '',
  },
  hasTimeStamps: true,
});
