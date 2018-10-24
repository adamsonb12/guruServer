const bookshelf = require('../config/bookshelf');

const Company = require('./Company');

bookshelf.plugin('registry');
bookshelf.plugin(require('bookshelf-cascade-soft-delete'));

module.exports = bookshelf.model('CompanyAddress', {
    tableName: 'company_addresses',
    defaults: {
        company_id: '',
        address_line_1: '',
        address_line_2: '',
        address_line_3: '',
        name_city: '',
        state: '',
        zipcode: '',
    },
    company: function() {
        return this.belongsTo(Company);
    },
    hasTimeStamps: true,
    soft: true,
});
