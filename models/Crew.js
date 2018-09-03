const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuidv1');

require('Company');
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
  hasTimeStamps: true,
});
