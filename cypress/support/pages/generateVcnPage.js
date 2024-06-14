class GenerateVcnPage {
  constructor() {
    this.url = 'https://api.dev.bee2pay.com/vcn/v2';
    this.token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0ZW5hbnRJZCI6InVzLWVhc3QtMTo5ZDJjYmI1ZC0yYTI3LTQ4YjMtYmMwZC02ZTI1MmM2YWRiNTYiLCJ0b2tlbklkIjoiNGE3ZmRhYjctNzY1Ni00YmNmLWIxMzUtNzI0ZDBhNzdlYzAwIn0.O67JEI8GbSP1azadgkfsOqFod1OH7RPAO_8DJczh2C0vx1SBR6JqvjLpqmCwVoyYa8zpbdu3qYvE59UaRD6uNCV5irljkF8l7hmqs_KFdSHlBrm19m9_10S4DzxBB63GAW94Z7hbsALdSonVflsCmutDPj_YyhRdnSgP5E-yTC1T6EO_s42-A5HMT6hfDHDP2aVHHONGh8wjtdTPVqX6B8ZLUUMoKK8k-_XaBA_hhYlOMr2kE7bcWvP3LHHwL4jrnEbOHlRZ-YShcRazWEsbwT-iWQSbtZGCpJUoYQmK33g0y9mNSfZrGRDGNET8wHb9atxEmvWXmM1nBG32Cx_8mg=';
  }

  createWithAllFields() {
    const body = {
      "echoToken": "ca4b5bea-7d6e-4b9c-bee4-5bbc195bfa41",
      "orderProductType": "hotel",
      "vcnActivationDate": "2024-06-08",
      "vcnCardHolderName": "JANE DOE",
      "vcnCreditLimit": 0.00,
      "vcnCreditLimitCurrencyCode": "BRL",
      "vcnExpirationDate": "2024-08-11",
      "vcnTimestamp": "2023-10-03T14:06:18.587121+00:00",
      "hotelTotalPriceValue": 110.00,
      "hotelTotalPriceCurrencyCode": "BRL",
      "hotelAddress": "Av Paulista n 321",
      "hotelCity": "São Paulo",
      "hotelCountryCode": "BR",
      "hotelGuestFirstName": "Jane",
      "hotelGuestLastName": "Doe",
      "hotelName": "Bee2Bee",
      "hotelPhone": "11 7555-4321",
      "hotelReservationEndDate": "2024-06-27",
      "hotelReservationLocator": "11085-10027",
      "hotelReservationStartDate": "2024-06-23",
      "hotelTaxesTotalValue": 10.00,
      "hotelTaxesCurrencyCode": "BRL",
      "hotelId": "HOTEL_OMNI_10027",
      "hotelChainId": "HOTEL_CHAIN_995",
      "hotelComments": "Comentários Bee2Bee",
      "hotelCustomField1": "Campo customizado de Hotel 1",
      "hotelCustomField2": "Campo customizado de Hotel 2",
      "hotelCustomField3": "Campo customizado de Hotel 3",
      "hotelCustomField4": "Campo customizado de Hotel 4",
      "hotelCustomField5": "Campo customizado de Hotel 5",
      "hotelDistrict": "Centro",
      "hotelEmail": "Bee2Bee@Bee2Bee.com",
      "hotelExtrasCurrencyCode": "BRL",
      "hotelExtrasTotalValue": 50.00,
      "hotelGuestEmail": "jane.doe@personalmail.com",
      "hotelGuestPhone": "11 99555-4321",
      "hotelGuestRegistration": "Bee2Bee-1478963",
      "hotelRateName": "Tarifa extra de Café da manhã",
      "hotelRateCode": "CDM",
      "hotelRateOccupancy": "SGL",
      "hotelRateBoard": "Café da manhã",
      "hotelReservationDateTime": "2023-10-26T12:00:00.000000+00:00",
      "hotelReservationPenaltyDate": "2023-10-09",
      "hotelRoomType": "Single",
      "hotelState": "",
      "hotelVat": "60.062.296/0001-05",
      "hotelZipCode": "01311-000",
      "orderApproverName": "Jhon Doe",
      "orderCardHolderName": "Jane Doe",
      "orderClientId": "5f6eeab3-2489-41d6-8033-f1a5a1e7dec4",
      "orderClientName": "Bee2Pay",
      "orderCostCenterCode": "Código do centro de custo",
      "orderCostCenterDescription": "Descrição do centro de custo",
      "orderCustomField1": "Campo customizado 1",
      "orderCustomField2": "Campo customizado 2",
      "orderCustomField3": "Campo customizado 3",
      "orderCustomField4": "Campo customizado 4",
      "orderCustomField5": "Campo customizado 5",
      "orderDateTime": "2023-10-03 14:06:18",
      "orderDepartment": "Departamento solicitante",
      "orderLedgerAccountCode": "Código da conta contábil",
      "orderLedgerAccountDescription": "Descrição da conta contábil",
      "orderLocator": "11085-10027",
      "orderProjectCode": "10027",
      "orderProjectDescription": "Descrição do projeto",
      "orderRequestorAddress": "Av Paulista n 123",
      "orderRequestorCity": "São Paulo",
      "orderRequestorCountryCode": "BR",
      "orderRequestorCPF": "105.266.560-85",
      "orderRequestorDistrict": "Paraiso",
      "orderRequestorEmail": "jhon.doe@bee2pay.com",
      "orderRequestorName": "Jhon Doe",
      "orderRequestorPhone": "+5511 7555-4321",
      "orderRequestorRegistration": "Jhon Doe",
      "orderRequestorState": "SP",
      "orderRequestorZipCode": "01311-000",
      "orderReservationId": "BAGABAGA",
      "orderReservationDate": "2023-10-03"
    };

    return cy.request({
      method: 'POST',
      url: this.url,
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: body
    });
  }


  createOnlyMandatoryFields() {
    const body = {
      "echoToken": "ca4b5bea-7d6e-4b9c-bee4-5bbc195bfa41",
      "orderProductType": "hotel",
      "vcnActivationDate": "2024-06-18",
      "vcnCardHolderName": "JANE DOE",
      "vcnCreditLimit": 100.00,
      "vcnCreditLimitCurrencyCode": "BRL",
      "vcnExpirationDate": "2024-07-11",
      "vcnTimestamp": "2023-04-12T18:23:18.587121+00:00",
      "hotelTotalPriceValue": 100.00,
      "hotelTotalPriceCurrencyCode": "BRL"
    };

    return cy.request({
      method: 'POST',
      url: this.url,
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: body
    });
  }


  getVcnById(vcnId) {
    const urlWithId = `${this.url}/${vcnId}`;

    return cy.request({
      method: 'GET',
      url: urlWithId,
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json'
      }
    });
  }
}

module.exports = GenerateVcnPage;