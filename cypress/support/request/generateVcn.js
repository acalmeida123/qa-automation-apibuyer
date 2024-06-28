class GenerateVcn {
  constructor() {
    this.url = `${Cypress.config('baseUrl')}/vcn/v2`;
  }

  createWithAllFields() {
    return cy.fixture('token').then((data) => {
      return cy.fixture('payload/allFields.json').then((body) => {
        return cy.request({
          method: 'POST',
          url: this.url,
          headers: {
            'Authorization': `Bearer ${data.token}`,
            'Content-Type': 'application/json'
          },
          body
        });
      });
    });
  }

  createOnlyMandatoryFields() {
    return cy.fixture('token').then((data) => {
      return cy.fixture('payload/mandatoryFields.json').then((body) => {
        return cy.request({
          method: 'POST',
          url: this.url,
          headers: {
            'Authorization': `Bearer ${data.token}`,
            'Content-Type': 'application/json'
          },
          body
        });
      });
    });
  }

  getVcnById(vcnId) {
    return cy.fixture('token').then((data) => {
      return cy.request({
        method: 'GET',
        url: `${this.url}/${vcnId}`,
        headers: {
          'Authorization': `Bearer ${data.token}`,
          'Content-Type': 'application/json'
        }
      });
    });
  }

  updateVcn(vcnId) {
    return cy.fixture('token').then((data) => {
      return cy.fixture('payload/mandatoryFieldsUpdate.json').then((body) => {
        return cy.request({
          method: 'PATCH',
          url: `${this.url}/${vcnId}`,
          headers: {
            'Authorization': `Bearer ${data.token}`,
            'Content-Type': 'application/json',
            'X-Amz-Date': new Date().toISOString()
          }, 
          body
        });
      });
    });
  }
}

export default GenerateVcn;
