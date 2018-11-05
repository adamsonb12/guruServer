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
const companyCreateEmployee = require('./company_controller/employee/createEmployee');
const companyDeleteEmployee = require('./company_controller/employee/deleteEmployee');
const companyUpdateEmployee = require('./company_controller/employee/updateEmployee');

const companyGetCrew = require('./company_controller/crew/getCrew');
const companyGetCompanyCrews = require('./company_controller/crew/getCompanyCrews');
const companyCreateCrew = require('./company_controller/crew/createCrew');
const companyDeleteCrew = require('./company_controller/crew/deleteCrew');
const companyUpdateCrew = require('./company_controller/crew/updateCrew');
const companyAddEmployeeToCrew = require('./company_controller/crew/addEmployeeToCrew');
const companyRemoveEmployeeFromCrew = require('./company_controller/crew/removeEmployeeFromCrew');

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
    guru.post('/employee', companyCreateEmployee.validation, companyCreateEmployee.endpoint);
    guru.delete('/employee', companyDeleteEmployee.validation, companyDeleteEmployee.endpoint);
    guru.put('/employee', companyUpdateEmployee.validation, companyUpdateEmployee.endpoint);

    guru.get('/crew', companyGetCrew);
    guru.get('/company_crews', companyGetCompanyCrews);
    guru.delete('/crew', companyDeleteCrew.validation, companyDeleteCrew.endpoint);
    guru.post('/crew', companyCreateCrew.validation, companyCreateCrew.endpoint);
    guru.put('/crew', companyUpdateCrew.validation, companyUpdateCrew.endpoint);
    guru.post('/crew_employee', companyAddEmployeeToCrew.validation, companyAddEmployeeToCrew.endpoint);
    guru.delete('/crew_employee', companyRemoveEmployeeFromCrew.validation, companyRemoveEmployeeFromCrew.endpoint);

    // User Routes
    guru.post('/user', userCreateUser);
    guru.get('/user/get-all-users', userGetAllUsers);
    guru.get('/user/get-one-or-multiple-users', userGetOneOrMultipleUsers);
    guru.put('/user/update-user', userUpdateUser);
    guru.delete('/user/delete-user', userDeleteUser);
};
