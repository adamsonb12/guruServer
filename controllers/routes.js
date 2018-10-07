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

// company address
const companyGetCompanyAddress = require('./company_controller/company_address/getCompanyAddress');

const companyGetEmployee = require('./company_controller/createEmployee');

const companyCreateCompanyRole = require('./company_controller/createCompanyRole');

// crews
const companyGetCompanyCrew = require('./company_controller/getCompanyCrew');
const companyGetCompanyCrews = require('./company_controller/getCompanyCrews');

const companyCreateCompanyCrew = require('./company_controller/createCompanyCrew');
const companyCreateCompanyCrewMember = require('./company_controller/createCompanyCrewMember');

const companyCreateEmployee = require('./company_controller/createEmployee');

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
    guru.post('/company', companyCreateCompany);
    guru.delete('/company', companyDeleteCompany);

    guru.get('/company_address', companyGetCompanyAddress);

    guru.get('/employee', companyGetEmployee);

    // Crews
    guru.get('/crew', companyGetCompanyCrew);
    guru.get('/crews', companyGetCompanyCrews);

    guru.post('/company/crew', companyCreateCompanyCrew);
    guru.post('/company/role', companyCreateCompanyRole);
    guru.post('/company/crewmember', companyCreateCompanyCrewMember);
    guru.post('/company/employee', companyCreateEmployee);

    // User Routes
    guru.post('/user', userCreateUser);
    guru.get('/user/get-all-users', userGetAllUsers);
    guru.get('/user/get-one-or-multiple-users', userGetOneOrMultipleUsers);
    guru.put('/user/update-user', userUpdateUser);
    guru.delete('/user/delete-user', userDeleteUser);
};
