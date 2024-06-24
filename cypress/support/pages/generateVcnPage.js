class GenerateVcnPage {
  constructor() {
    this.url = '/vcn/v2'; // Relative URL since baseUrl is set
    cy.fixture('token.json').then((data) => {
      this.token = data.token;
    });
  }

  createWithAllFields() {
    return cy.fixture('payload/allFields.json').then((body) => {
      return cy.request({
        method: 'POST',
        url: this.url,
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: body
      });
    });
  }

  createOnlyMandatoryFields() {
    return cy.fixture('payload/mandatoryFields.json').then((body) => {
      return cy.request({
        method: 'POST',
        url: this.url,
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: body
      });
    });
  }

  getVcnById(vcnId) {
    return cy.request({
      method: 'GET',
      url: `${this.url}/${vcnId}`,
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      }
    });
  }
}

export default GenerateVcnPage;
