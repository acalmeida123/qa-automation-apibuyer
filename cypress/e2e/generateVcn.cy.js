
describe('Gerar VCN', () => {
  it('Devo gerar um VCN com todos os campos', () => {
    cy.generateVcn().then((response) => {
      expect(response.status).to.eq(201);
      
      // Verifique os campos esperados na resposta
      console.log('*****************');
      console.log(response.body);

      // Verifique propriedades após geração do VCN:
      expect(response.body.creditCard).to.have.property('cardHolderName', 'JANE DOE');
      expect(response.body.creditCard).to.have.property('cardNumber').that.is.not.null;
      expect(response.body.creditCard).to.have.property('cardTypeCode', 'MASTERCARD');
      expect(response.body.creditCard).to.have.property('expireDate', '2025-12-01');
      expect(response.body).to.have.property('echoToken', 'ca4b5bea-7d6e-4b9c-bee4-5bbc195bfa41');
      expect(response.body).to.have.property('orderProductType', 'hotel');
      expect(response.body).to.have.property('statusCode', 201);
    });
  });
});
