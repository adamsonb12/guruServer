const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuidv1');

require('./User');
bookshelf.plugin('registry');


