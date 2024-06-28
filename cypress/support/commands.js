import GenerateVcn from './request/generateVcn';

Cypress.Commands.add('createWithAllFields', () => {
  const generateVcn = new GenerateVcn();
  return generateVcn.createWithAllFields();
});

Cypress.Commands.add('createOnlyMandatoryFields', () => {
  const generateVcn = new GenerateVcn();
  return generateVcn.createOnlyMandatoryFields();
});

Cypress.Commands.add('getVcnById', (vcnId) => {
  const generateVcn = new GenerateVcn();
  return generateVcn.getVcnById(vcnId);
});

Cypress.Commands.add('updateVcn', (vcnId) => {
  const generateVcn = new GenerateVcn();
  return generateVcn.updateVcn(vcnId);
});