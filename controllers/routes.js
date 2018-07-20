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
const companyCreateCompany = require('./company_controller/createCompany');
const companyCreateCompanyCrew = require('./company_controller/createCompanyCrew');
const companyCreateCompanyRole = require('./company_controller/createCompanyRole')
const companyCreateCompanyCrewMember = require('./company_controller/createCompanyCrewMember');

// users

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
    guru.post('/company', companyCreateCompany);
    guru.post('/company/crew', companyCreateCompanyCrew);
    guru.post('/company/role', companyCreateCompanyRole);
    guru.post('/company/crewmember', companyCreateCompanyCrewMember);
};
