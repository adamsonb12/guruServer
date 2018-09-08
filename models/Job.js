const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

require('./User');
require('./Property');
require('./Crew');
bookshelf.plugin('registry');

module.exports = bookshelf.model('Job', {
  tableName: 'jobs',
  defaults: {
    id: uuidv1(),
    date_scheduled: new Date(Date.now()),
    date_starts: new Date(Date.now()),
    estimated_duration: 0,
    date_arrived: '',
    date_completed: '',
    tip_amount: 0,
  },
  crew: function() {
    return this.belongsTo(Crew);
  },
  user: function() {
    return this.belongsTo(User);
  },
  property: function() {
    return this.belongsTo(Property);
  },
  hasTimeStamps: true,
});
