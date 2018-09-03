const bookshelf = require('../config/bookshelf');

bookshelf.plugin('registry');

module.exports = bookshelf.model('Task', {
  tableName: 'tasks',
  defaults: {
    name_task: '',
  },
  hasTimeStamps: true,
});
