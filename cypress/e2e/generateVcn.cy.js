import { addDays, formatDate } from "../support/utils/dateUtils"
let vcnId;

describe('Gerar, consultar e atualizar cartões', () => {
  
  it('Devo gerar um cartão ATIVO com todos os campos', () => {
    cy.createWithAllFields().then((response) => {
      expect(response.status).to.eq(201);
      
      console.log('VCN Gerado com sucesso:', response.body);
      expect(response.body.creditCard).to.have.property('cardHolderName', 'JOSE ALMEIDA');
      expect(response.body.creditCard).to.have.property('cardNumber').that.is.not.null;
      expect(response.body.creditCard).to.have.property('cardTypeCode', 'MASTERCARD');
      expect(response.body.creditCard).to.have.property('cvv').that.is.not.null;
      expect(response.body.creditCard).to.have.property('expireDate', '2025-12-01');
      expect(response.body).to.have.property('echoToken', 'ca4b5bea-7d6e-4b9c-bee4-5bbc195bfa41');
      expect(response.body).to.have.property('vcnId').that.is.not.null;
      expect(response.body).to.have.property('orderProductType', 'hotel');
      expect(response.body).to.have.property('statusCode', 201);
      expect(response.body).to.have.property('vcnStatus', 'ACTIVE');
    });
  });

  it('Devo gerar um cartão ATIVO com apenas os campos obrigatórios', () => {
    cy.createOnlyMandatoryFields().then((response) => {
      expect(response.status).to.eq(201);
      vcnId = response.body.vcnId;

      console.log('VCN Gerado com sucesso:', response.body);
      expect(response.body).to.have.property('vcnStatus', 'ACTIVE');
      expect(response.body).to.have.property('vcnId').that.is.not.null;
    });
  });

  it('Devo consultar um cartão gerado com sucesso', () => {
    cy.createOnlyMandatoryFields().then((response) => {
      vcnId = response.body.vcnId;
      cy.getVcnById(vcnId).then((getResponse) => {
        expect(getResponse.status).to.eq(200);
        console.log('Consulta do VCN:', getResponse.body);
        expect(getResponse.body).to.have.property('vcnId', vcnId);
      });
    });
  });

  it.only('Devo atualizar um cartão com rules, 15 dias depois do checkout', () => {
    cy.createOnlyMandatoryFields().then((response) => {
      vcnId = response.body.vcnId;
      cy.updateVcn(vcnId).then((updateResponse) => {
        expect(updateResponse.status).to.eq(200);
        console.log('VCN Atualizado com sucesso:', updateResponse.body);
        updateResponse.body.vcnExpirationDate = formatDate(addDays(updateResponse.body.vcnExpirationDate, 1));

      

        const checkoutDate = new Date(updateResponse.body.hotelReservationEndDate);
        // console.log("Data de Check-out da API", updateResponse.body.hotelReservationEndDate);
        // console.log("Data de check-out FORMATADO + 1: ", formatDate(addDays(checkoutDate, 1)));
        
        const reservationExpiredAfterCheckout = formatDate(addDays(checkoutDate, 16));
         //console.log("15 dias após o check-out: ", reservationExpiredAfterCheckout);
         //console.log("Data de expiração: ", updateResponse.body.vcnExpirationDate);

        const expiredDataFormated = updateResponse.body.vcnExpirationDate;
        // console.log("Data de expiração FORMATADA: ", expiredDataFormated);
        // console.log('---------------------------------------------');

        // console.log('Verificando se a data de check-out e expiração sao iguais.');
         // debugger;
        if(reservationExpiredAfterCheckout === expiredDataFormated) {
          console.log("A data de check-out + 15 dias é IGUAL a data de expiração");
        } else {
          console.log("A data de check-out + 15 dias é DIFERENTE a data de expiração");
        }

        expect(updateResponse.body).to.have.property('vcnExpirationDate', reservationExpiredAfterCheckout);
        expect(updateResponse.body).to.have.property('vcnCreditLimit', updateResponse.body.vcnCreditLimit);
        expect(updateResponse.body).to.have.property('maxLimit', updateResponse.body.maxLimit);
        expect(updateResponse.body).to.have.property('hotelReservationStartDate', updateResponse.body.hotelReservationStartDate);
        expect(updateResponse.body).to.have.property('hotelReservationEndDate', updateResponse.body.hotelReservationEndDate);

      });
    });
  
    it('Devo gerar um cartão ATIVO com apenas os campos obrigatórios', () => {
      cy.createOnlyMandatoryFields().then((response) => {
        expect(response.status).to.eq(201);
  
        console.log('VCN Gerado com sucesso:', response.body);
        expect(response.body).to.have.property('vcnStatus', 'ACTIVE');
        expect(response.body).to.have.property('vcnId').that.is.not.null; 
      });
    });
  });
});
