let vcnId;

describe('Gerar e consultar cartões', () => {
  it('Devo gerar um cartão com todos os campos', () => {
    cy.createWithAllFields().then((response) => {
      expect(response.status).to.eq(201);
      
      console.log('VCN Gerado com sucesso:', response.body);
      expect(response.body.creditCard).to.have.property('cardHolderName', 'JANE DOE');
      expect(response.body.creditCard).to.have.property('cardNumber').that.is.not.null;
      expect(response.body.creditCard).to.have.property('cardTypeCode', 'MASTERCARD');
      expect(response.body.creditCard).to.have.property('expireDate', '2025-12-01');
      expect(response.body).to.have.property('echoToken', 'ca4b5bea-7d6e-4b9c-bee4-5bbc195bfa41');
      expect(response.body).to.have.property('orderProductType', 'hotel');
      expect(response.body).to.have.property('statusCode', 201);
    });
  });

  it('Devo gerar um cartão com os campos obrigatórios', () => {
    cy.createOnlyMandatoryFields().then((response) => {
      expect(response.status).to.eq(201);
      vcnId = response.body.vcnId;
  
      console.log('VCN Gerado com sucesso:', response.body);
      expect(response.body).to.have.property('vcnStatus', 'ACTIVE');
      expect(response.body).to.have.property('vcnId').that.is.not.null;
    });
  });

  it('Devo consultar um cartão gerado com sucesso', () => {
    cy.getVcnById(vcnId).then((getResponse) => {
      expect(getResponse.status).to.eq(200); // A resposta de GET deve ser 200, não 201
      console.log('Consulta do VCN:', getResponse.body);
      expect(getResponse.body).to.have.property('vcnId', vcnId);
    });
  });
});
