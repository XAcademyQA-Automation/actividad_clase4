describe('Verificación de información en la página del hotel con comandos personalizados', () => {
  beforeEach(() => {
    // Visitar la página principal
    cy.visit('https://automationintesting.online/');
  });

  it('Verifica la información del hotel', () => {
    // Constantes con información esperada del hotel
    const hotelName = 'Shady Meadows B&B';
    const address = 'The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S';
    const phone = '012345678901';
    const email = 'fake@fakeemail.com';
    const description = 
      `Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. ` +
      `A place so beautiful you will never want to leave. ` +
      `All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. ` +
      `It is a delightful place.`;

    // Uso de comandos personalizados para verificar la información
    cy.verifyHotelInfo(hotelName, address, phone, email);
    cy.verifyVisibleImage();
    cy.verifyHotelDescription(description);
  });
});
