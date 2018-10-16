// jobs
const jobCreateJob = require('./jobs_controller/createJob');
const jobCreateJobRoom = require('./jobs_controller/createJobRoom');
const jobCreateJobRoomFixture = require('./jobs_controller/createJobRoomFixture');
const jobCreateJobRoomFixtureCleaningTask = require('./jobs_controller/createJobRoomFixtureCleaningTask');

// properties
const propertyCreateProperty = require('./property_controller/createProperty');
const propertyCreatePropertyAddress = require('./property_controller/createPropertyAddress');
const propertyCreateRoom = require('./property_controller/createRoom');
const propertyCreateRoomFixture = require('./property_controller/createRoomFixture');

// companies
const companyGetCompany = require('./company_controller/company/getCompany');
const companyGetAllCompanies = require('./company_controller/company/getAllCompanies');
const companyCreateCompany = require('./company_controller/company/createCompany');
const companyDeleteCompany = require('./company_controller/company/deleteCompany');
const companyUpdateCompany = require('./company_controller/company/updateCompany');

const companyGetCompanyAddress = require('./company_controller/company_address/getCompanyAddress');
const companyCreateCompanyAddress = require('./company_controller/company_address/createCompanyAddress');
const companyDeleteCompanyAddress = require('./company_controller/company_address/deleteCompanyAddress');
const companyGetAllCompanyAddresses = require('./company_controller/company_address/getAllCompanyAddresses');
const companyUpdateCompanyAddress = require('./company_controller/company_address/updateCompanyAddress');

const companyGetEmployee = require('./company_controller/employee/getEmployee');
const companyGetAllEmployees = require('./company_controller/employee/getAllEmployees');

const companyCreateCompanyRole = require('./company_controller/createCompanyRole');

const companyGetCompanyCrew = require('./company_controller/getCompanyCrew');
const companyGetCompanyCrews = require('./company_controller/getCompanyCrews');

const companyCreateCompanyCrew = require('./company_controller/createCompanyCrew');
const companyCreateCompanyCrewMember = require('./company_controller/createCompanyCrewMember');

// users
const userCreateUser = require('./user_controller/createUser');
const userGetAllUsers = require('./user_controller/getAllUsers');
const userUpdateUser = require('./user_controller/updateUser');
const userDeleteUser = require('./user_controller/deleteUser');
const userGetOneOrMultipleUsers = require('./user_controller/getOneOrMultipleUsers');

module.exports = guru => {
    // Job Routes
    guru.post('/job', jobCreateJob);
    guru.post('/job/room', jobCreateJobRoom);
    guru.post('/job/room/fixture', jobCreateJobRoomFixture);
    guru.post('/job/room/fixture/cleaningtask', jobCreateJobRoomFixtureCleaningTask);

    // Property Routes
    guru.post('/property', propertyCreateProperty);
    guru.post('/property/address', propertyCreatePropertyAddress);
    guru.post('/property/room', propertyCreateRoom);
    guru.post('/property/room/fixture', propertyCreateRoomFixture);

    // Company Routes
    guru.get('/company', companyGetCompany);
    guru.get('/companies', companyGetAllCompanies);
    guru.post('/company', companyCreateCompany.validation, companyCreateCompany.endpoint);
    guru.delete('/company', companyDeleteCompany.validation, companyDeleteCompany.endpoint);
    guru.put('/company', companyUpdateCompany.validation, companyUpdateCompany.endpoint);

    guru.get('/company_address', companyGetCompanyAddress);
    guru.post('/company_address', companyCreateCompanyAddress.validation, companyCreateCompanyAddress.endpoint);
    guru.delete('/company_address', companyDeleteCompanyAddress.validation, companyDeleteCompanyAddress.endpoint);
    guru.get('/company_addresses', companyGetAllCompanyAddresses);
    guru.put('/company_address', companyUpdateCompanyAddress.validation, companyUpdateCompanyAddress.endpoint);

    guru.get('/employee', companyGetEmployee);
    guru.get('/employees', companyGetAllEmployees);

    // Crews
    guru.get('/crew', companyGetCompanyCrew);
    guru.get('/crews', companyGetCompanyCrews);

    guru.post('/company/crew', companyCreateCompanyCrew);
    guru.post('/company/role', companyCreateCompanyRole);
    guru.post('/company/crewmember', companyCreateCompanyCrewMember);

    // User Routes
    guru.post('/user', userCreateUser);
    guru.get('/user/get-all-users', userGetAllUsers);
    guru.get('/user/get-one-or-multiple-users', userGetOneOrMultipleUsers);
    guru.put('/user/update-user', userUpdateUser);
    guru.delete('/user/delete-user', userDeleteUser);
};
