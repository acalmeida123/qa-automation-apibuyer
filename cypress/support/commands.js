import GenerateVcnPage from './pages/generateVcnPage';

Cypress.Commands.add('createWithAllFields', () => {
  const generateVcnPage = new GenerateVcnPage();
  return generateVcnPage.createWithAllFields();
});

Cypress.Commands.add('createOnlyMandatoryFields', () => {
  const generateVcnPage = new GenerateVcnPage();
  return generateVcnPage.createOnlyMandatoryFields();
});

Cypress.Commands.add('getVcnById', (vcnId) => {
  const generateVcnPage = new GenerateVcnPage();
  return generateVcnPage.getVcnById(vcnId);
});
