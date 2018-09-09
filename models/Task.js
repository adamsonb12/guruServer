const bookshelf = require('../config/bookshelf');

require('./Fixture');
bookshelf.plugin('registry');

module.exports = bookshelf.model('Task', {
  tableName: 'tasks',
  defaults: {
    name_task: '',
  },
  fixtures: function() {
    return this.belongsToMany(Fixture);
  },
  hasTimeStamps: true,
});
