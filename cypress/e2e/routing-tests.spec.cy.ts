describe('Проверка роутинга приложения.', () => {

  it('Строка', () => {
    cy.viewport(1280, 900);
    cy.visit('localhost:3000');
    cy.get('a[href*="recursion"]').click();
    cy.contains('Строка');
    cy.get('button').contains('Развернуть');
    cy.get('button').contains('К оглавлению').click();
    cy.contains('МБОУ АЛГОСОШ');
  });

  it("Последовательность Фибоначчи", () => {
    cy.viewport(1280, 900);
    cy.visit('localhost:3000');
    cy.get('a[href*="fibonacci"]').click();
    cy.contains('Последовательность Фибоначчи');
    cy.get('button').contains('Рассчитать');
    cy.get('button').contains('К оглавлению').click();
    cy.contains('МБОУ АЛГОСОШ');
  });

  it("Сортировка массива", () => {
    cy.viewport(1280, 900);
    cy.visit('localhost:3000');
    cy.get('a[href*="sorting"]').click();
    cy.contains('Сортировка массива');
    cy.get('button').contains('Новый массив');
    cy.get('button').contains('К оглавлению').click();
    cy.contains('МБОУ АЛГОСОШ');
  });

  it("Стек", () => {
    cy.viewport(1280, 900);
    cy.visit('localhost:3000');
    cy.get('a[href*="stack"]').click();
    cy.contains('Стек');
    cy.get('button').contains('Очистить');
    cy.get('button').contains('К оглавлению').click();
    cy.contains('МБОУ АЛГОСОШ');
  });

  it("Очередь", () => {
    cy.viewport(1280, 900);
    cy.visit('localhost:3000');
    cy.get('a[href*="queue"]').click();
    cy.contains('Очередь');
    cy.get('button').contains('Очистить');
    cy.get('button').contains('К оглавлению').click();
    cy.contains('МБОУ АЛГОСОШ');
  });

  it("Связнный список", () => {
    cy.viewport(1280, 900);
    cy.visit('localhost:3000');
    cy.get('a[href*="list"]').click();
    cy.contains('Связный список');
    cy.get('button').contains('Удалить по индексу');
    cy.get('button').contains('К оглавлению').click();
    cy.contains('МБОУ АЛГОСОШ');
  });
  
});