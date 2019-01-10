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

const companyAddCompanyEmployeeRole = require('./company_controller/employee/addEmployeeRole');
const companyRemoveCompanyEmployeeRole = require('./company_controller/employee/removeEmployeeRole');
const companyUpdateCompanyEmployeeRole = require('./company_controller/employee/updateEmployeeRole');

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
const userGetUser = require('./user_controller/getUser');

// properties
const propertyGetProperty = require('./property_controller/property/getProperty');
const propertyGetAllProperties = require('./property_controller/property/getAllProperties');
const propertyCreateProperty = require('./property_controller/property/createProperty');
const propertyUpdateProperty = require('./property_controller/property/updateProperty');
const propertyDeleteProperty = require('./property_controller/property/deleteProperty');

const propertyGetPropertyAddress = require('./property_controller/property_address/getPropertyAddress');
const propertyCreatePropertyAddress = require('./property_controller/property_address/createPropertyAddress');
const proeprtyDeletePropertyAddress = require('./property_controller/property_address/deletePropertyAddress');
const propertyUpdateProeprtyAddress = require('./property_controller/property_address/updatePropertyAddress');

const propertyGetPropertyRoom = require('./property_controller/property_rooms/getPropertyRoom');
const propertyGetPropertyRooms = require('./property_controller/property_rooms/getPropertyRooms');
const propertyCreatePropertyRoom = require('./property_controller/property_rooms/createPropertyRoom');
const propertyUpdatePropertyRoom = require('./property_controller/property_rooms/updatePropertyRoom');
const propertyDeletePropertyRoom = require('./property_controller/property_rooms/deletePropertyRoom');

// Roles
const roleGetRole = require('./roles_controller/getRole');
const roleGetAllRoles = require('./roles_controller/getAllRoles');
const roleCreateRole = require('./roles_controller/createRole');
const roleUpdateRole = require('./roles_controller/updateRole');
const roleDeleteRole = require('./roles_controller/deleteRole');

// Fixtures
const fixtureGetFixture = require('./fixtures_controller/getFixture');
const fixtureGetAllFixtures = require('./fixtures_controller/getAllFixtures');
const fixtureCreateFixture = require('./fixtures_controller/createFixture');
const fixtureDeleteFixture = require('./fixtures_controller/deleteFixture');
const fixtureUpdateFixture = require('./fixtures_controller/updateFixture');
const fixtureAttachTaskToFixture = require('./fixtures_controller/attachTaskToFixture');
const fixtureDetachTaskFromFixture = require('./fixtures_controller/detachTaskFromFixture');

// Tasks
const taskGetTask = require('./tasks_controller/getTask');
const taskGetAllTasks = require('./tasks_controller/getAllTasks');
const taskCreateTask = require('./tasks_controller/createTask');
const taskUpdateTask = require('./tasks_controller/updateTask');
const taskDeleteTask = require('./tasks_controller/deleteTask');

module.exports = guru => {
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

    guru.post('/employee_role', companyAddCompanyEmployeeRole.validation, companyAddCompanyEmployeeRole.endpoint);
    guru.delete(
        '/employee_role',
        companyRemoveCompanyEmployeeRole.validation,
        companyRemoveCompanyEmployeeRole.endpoint
    );
    guru.put('/employee_role', companyUpdateCompanyEmployeeRole.validation, companyUpdateCompanyEmployeeRole.endpoint);

    guru.get('/crew', companyGetCrew);
    guru.get('/company_crews', companyGetCompanyCrews);
    guru.delete('/crew', companyDeleteCrew.validation, companyDeleteCrew.endpoint);
    guru.post('/crew', companyCreateCrew.validation, companyCreateCrew.endpoint);
    guru.put('/crew', companyUpdateCrew.validation, companyUpdateCrew.endpoint);
    guru.post('/crew_employee', companyAddEmployeeToCrew.validation, companyAddEmployeeToCrew.endpoint);
    guru.delete('/crew_employee', companyRemoveEmployeeFromCrew.validation, companyRemoveEmployeeFromCrew.endpoint);

    // User Routes
    guru.post('/user', userCreateUser.validation, userCreateUser.endpoint);
    guru.get('/user', userGetUser);
    guru.get('/users', userGetAllUsers);
    guru.put('/user', userUpdateUser.validation, userUpdateUser.endpoint);
    guru.delete('/user', userDeleteUser.validation, userDeleteUser.endpoint);

    // Property Routes
    guru.get('/property', propertyGetProperty);
    guru.get('/properties', propertyGetAllProperties);
    guru.post('/property', propertyCreateProperty.validation, propertyCreateProperty.endpoint);
    guru.put('/property', propertyUpdateProperty.validation, propertyUpdateProperty.endpoint);
    guru.delete('/property', propertyDeleteProperty.validation, propertyDeleteProperty.endpoint);

    guru.get('/property_address', propertyGetPropertyAddress);
    guru.post('/property_address', propertyCreatePropertyAddress.validation, propertyCreatePropertyAddress.endpoint);
    guru.delete('/property_address', proeprtyDeletePropertyAddress.validation, proeprtyDeletePropertyAddress.endpoint);
    guru.put('/property_address', propertyUpdateProeprtyAddress.validation, propertyUpdateProeprtyAddress.endpoint);

    guru.get('/property_room', propertyGetPropertyRoom);
    guru.get('/property_rooms', propertyGetPropertyRooms);
    guru.post('/property_room', propertyCreatePropertyRoom.validation, propertyCreatePropertyRoom.endpoint);
    guru.put('/property_room', propertyUpdatePropertyRoom.validation, propertyUpdatePropertyRoom.endpoint);
    guru.delete('/property_room', propertyDeletePropertyRoom.validation, propertyDeletePropertyRoom.endpoint);

    // Roles
    guru.get('/role', roleGetRole);
    guru.get('/roles', roleGetAllRoles);
    guru.post('/role', roleCreateRole.validation, roleCreateRole.endpoint);
    guru.put('/role', roleUpdateRole.validation, roleUpdateRole.endpoint);
    guru.delete('/role', roleDeleteRole.validation, roleDeleteRole.endpoint);

    // Fixtures
    guru.get('/fixture', fixtureGetFixture);
    guru.get('/fixtures', fixtureGetAllFixtures);
    guru.post('/fixture', fixtureCreateFixture.validation, fixtureCreateFixture.endpoint);
    guru.delete('/fixture', fixtureDeleteFixture.validation, fixtureDeleteFixture.endpoint);
    guru.put('/fixture', fixtureUpdateFixture.validation, fixtureUpdateFixture.endpoint);
    guru.post('/fixture_task', fixtureAttachTaskToFixture.validation, fixtureAttachTaskToFixture.endpoint);
    guru.delete('/fixture_task', fixtureDetachTaskFromFixture.validation, fixtureDetachTaskFromFixture.endpoint);

    // Tasks
    guru.get('/task', taskGetTask);
    guru.get('/tasks', taskGetAllTasks);
    guru.post('/task', taskCreateTask.validation, taskCreateTask.endpoint);
    guru.put('/task', taskUpdateTask.validation, taskUpdateTask.endpoint);
    guru.delete('/task', taskDeleteTask.validation, taskDeleteTask.endpoint);
};
