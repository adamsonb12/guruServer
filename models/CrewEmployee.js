const bookshelf = require('../config/bookshelf');

require('./Company');
require('./Employee');
require('./Crew');
bookshelf.plugin('registry');

module.exports = bookshelf.model('CrewEmployee', {
  tableName: 'crew_employees',
  company: function() {
    return this.belongsTo(Company);
  },
  employee: function() {
    return this.belongsTo(Employee);
  },
  crew: function() {
    return this.belongsTo(Crew);
  },
});
