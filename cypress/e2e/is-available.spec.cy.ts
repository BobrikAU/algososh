
it('Запуск приложения АЛГОСОШ', () => {
  cy.viewport(1280, 900);
  cy.visit('localhost:3000');
  cy.contains('МБОУ АЛГОСОШ');
});
