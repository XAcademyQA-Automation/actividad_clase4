// Verificar la información del hotel
Cypress.Commands.add('verifyHotelInfo', (hotelName, address, phone, email) => {
    cy.log('Verificar info de hotel...');
    cy.contains(hotelName).should('be.visible');
    cy.contains(address).should('be.visible');
    cy.contains(phone).should('be.visible');
    cy.contains(email).should('be.visible');
  });
  

  Cypress.Commands.add('verifyVisibleImage', () => {
    cy.log('Verificar que haya al menos una imagen visible');
    cy.get('img').should('be.visible');
  });
  
 
  Cypress.Commands.add('verifyHotelDescription', (description) => {
    cy.log('Verificar la descripción del hotel')
    cy.contains(description).should('be.visible');
  });
  