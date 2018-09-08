const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

require('./Company');
require('./Job');
require('./CrewEmployee');
bookshelf.plugin('registry');

module.exports = bookshelf.model('Crew', {
  tableName: 'crews',
  defaults: {
    id: uuidv1(),
    company_id: '',
    name_crew: '',
  },
  company: function() {
    return this.belongsTo(Company);
  },
  jobs: function() {
    return this.hasMany(Job);
  },
  crew_employees: function() {
    return this.hasMany(CrewEmployee);
  },
  hasTimeStamps: true,
});
