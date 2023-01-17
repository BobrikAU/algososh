describe('Компонент Очередь', () => {

  beforeEach(() => {
    cy.viewport(1280, 900);
    cy.visit('http://localhost:3000');
    cy.get('a[href*="queue"]').click();
  });

  it('Доступность кнопки Добавить', () => {
    cy.get('input[placeholder="Введите текст"]').should('be.empty');
    cy.contains('Добавить').should('be.disabled');
    cy.get('input[placeholder="Введите текст"]').type('s');
    cy.contains('Добавить').should('be.enabled');
  });

  it('Добавление элемента в очередь', () => {
    // проверка первичного состояния элементов очереди
    cy.get('p[data-testid="text-in-circle"]')
      .each((item) => {
        cy.wrap(item).should('be.empty');
      })
      .parent()
      .each((item) => {
        cy.wrap(item).should('have.css', 'border-color', 'rgb(0, 50, 255)');
      })
      .prev()
      .each((item) => {
        cy.wrap(item).should('be.empty');
      })
      .next().next()
      .each((item, index) => {
        cy.wrap(item).should('have.text', `${index}`);
      })
      .next()
      .each((item) => {
        cy.wrap(item).should('be.empty');
      });

    // добавление первого значения в очередь
    cy.get('input[placeholder="Введите текст"]').type('a');
    cy.contains('Добавить').click();
    // первый шаг анимации (окрашивание элемента, в который добавляется значение)
    cy.get('p[data-testid="text-in-circle"]')
      .each((item) => {
        cy.wrap(item).should('be.empty');
      })
      .parent()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.css', 'border-color', 'rgb(210, 82, 225)');
        }
        else {
          cy.wrap(item).should('have.css', 'border-color', 'rgb(0, 50, 255)');
        }
      })
      .prev()
      .each((item) => {
        cy.wrap(item).should('be.empty');
      })
      .next().next()
      .each((item, index) => {
        cy.wrap(item).should('have.text', `${index}`);
      })
      .next()
      .each((item) => {
        cy.wrap(item).should('be.empty');
      });
    // второй шаг анимации (внесение значения в элемент, распределение head и tail)
    cy.get('p[data-testid="text-in-circle"]', {timeout: 500})
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'a');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .parent()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.css', 'border-color', 'rgb(210, 82, 225)');
        }
        else {
          cy.wrap(item).should('have.css', 'border-color', 'rgb(0, 50, 255)');
        }
      })
      .prev()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'head');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .next().next()
      .each((item, index) => {
        cy.wrap(item).should('have.text', `${index}`);
      })
      .next()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'tail');
        } else {
          cy.wrap(item).should('be.empty');
        }
      });
    // третий шаг анимации (возврат обычного цвета у элемента, куда добавляли новое значение)
    cy.get('p[data-testid="text-in-circle"]', {timeout: 500})
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'a');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .parent()
      .each((item) => {
        cy.wrap(item).should('have.css', 'border-color', 'rgb(0, 50, 255)');
      })
      .prev()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'head');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .next().next()
      .each((item, index) => {
        cy.wrap(item).should('have.text', `${index}`);
      })
      .next()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'tail');
        } else {
          cy.wrap(item).should('be.empty');
        }
      });

    // добавление второго значения в очередь
    cy.get('input[placeholder="Введите текст"]').type('bbbb');
    cy.contains('Добавить').click();
    // первый шаг анимации (окрашивание элемента, в который добавляется значение)
    cy.get('p[data-testid="text-in-circle"]')
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'a');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .parent()
      .each((item, index) => {
        if (index === 1) {
          cy.wrap(item).should('have.css', 'border-color', 'rgb(210, 82, 225)');
        }
        else {
          cy.wrap(item).should('have.css', 'border-color', 'rgb(0, 50, 255)');
        }
      })
      .prev()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'head');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .next().next()
      .each((item, index) => {
        cy.wrap(item).should('have.text', `${index}`);
      })
      .next()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'tail');
        } else {
          cy.wrap(item).should('be.empty');
        }
      });
    // второй шаг анимации (внесение значения в элемент, распределение head и tail)
    cy.get('p[data-testid="text-in-circle"]', {timeout: 500})
      .each((item, index) => {
        switch (index) {
          case 0:
            cy.wrap(item).should('have.text', 'a');
            break;
          case 1:
            cy.wrap(item).should('have.text', 'bbbb');
            break;
          default:
            cy.wrap(item).should('be.empty');
        }
      })
      .parent()
      .each((item, index) => {
        if (index === 1) {
          cy.wrap(item).should('have.css', 'border-color', 'rgb(210, 82, 225)');
        }
        else {
          cy.wrap(item).should('have.css', 'border-color', 'rgb(0, 50, 255)');
        }
      })
      .prev()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'head');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .next().next()
      .each((item, index) => {
        cy.wrap(item).should('have.text', `${index}`);
      })
      .next()
      .each((item, index) => {
        if (index === 1) {
          cy.wrap(item).should('have.text', 'tail');
        } else {
          cy.wrap(item).should('be.empty');
        }
      });
    // третий шаг анимации (возврат обычного цвета у элемента, куда добавляли новое значение)
    cy.get('p[data-testid="text-in-circle"]', {timeout: 500})
      .each((item, index) => {
        switch (index) {
          case 0:
            cy.wrap(item).should('have.text', 'a');
            break;
          case 1:
            cy.wrap(item).should('have.text', 'bbbb');
            break;
          default:
            cy.wrap(item).should('be.empty');
        }
      })
      .parent()
      .each((item) => {
        cy.wrap(item).should('have.css', 'border-color', 'rgb(0, 50, 255)');
      })
      .prev()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'head');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .next().next()
      .each((item, index) => {
        cy.wrap(item).should('have.text', `${index}`);
      })
      .next()
      .each((item, index) => {
        if (index === 1) {
          cy.wrap(item).should('have.text', 'tail');
        } else {
          cy.wrap(item).should('be.empty');
        }
      });

    // добавление и удаление элементов в таком количестве, чтобы tail оказалось левее head
    // tail должен иметь индекс 0, а head - индекс 1; а также проверка отрисовки
    for (let i = 0; i < 5; i++) {
      cy.get('input[placeholder="Введите текст"]').type(`c${i}`);
      cy.contains('Добавить').click();
      cy.contains('Удалить').should('be.enabled');
    }
    cy.contains('Удалить').click();
    cy.contains('Удалить').should('be.enabled');
    cy.get('input[placeholder="Введите текст"]').type(`dddd`);
    cy.contains('Добавить').click();
    cy.contains('Удалить').should('be.enabled');
    cy.contains('bbbb')
      .parent()
      .prev().should('have.text', 'head')
      .next().next().should('have.text', '1')
      .next().should('be.empty');
    cy.contains('dddd')
      .parent()
      .prev().should('be.empty')
      .next().next().should('have.text', '0')
      .next().should('have.text', 'tail');
  });

  it('Удаление элемента из очереди', () => {
    for (let i = 1; i <= 3; i++) {
      cy.get('input[placeholder="Введите текст"]').type(`${i}${i}${i}${i}`);
      cy.contains('Добавить').click();
      cy.contains('Удалить').should('be.enabled');
    }
    cy.contains('Удалить').click();
    // первый этап анимации - подсветка удалаемого элемента
    cy.get('p[data-testid="text-in-circle"]')
      .each((item, index) => {
        switch (index) {
          case 0:
            cy.wrap(item).should('have.text', '1111');
            break;
          case 1:
            cy.wrap(item).should('have.text', '2222');
            break;
          case 2:
            cy.wrap(item).should('have.text', '3333');
            break;
          default:
            cy.wrap(item).should('be.empty');
        }
      })
      .parent()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.css', 'border-color', 'rgb(210, 82, 225)');
        }
        else {
          cy.wrap(item).should('have.css', 'border-color', 'rgb(0, 50, 255)');
        }
      })
      .prev()
      .each((item, index) => {
        if (index === 0) {
          cy.wrap(item).should('have.text', 'head');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .next().next()
      .each((item, index) => {
        cy.wrap(item).should('have.text', `${index}`);
      })
      .next()
      .each((item, index) => {
        if (index === 2) {
          cy.wrap(item).should('have.text', 'tail');
        } else {
          cy.wrap(item).should('be.empty');
        }
      });
    // второй этап анимации (удаление значения, перенос head, возврат дефолтного цвета)
    cy.get('p[data-testid="text-in-circle"]', {timeout: 500})
      .each((item, index) => {
        switch (index) {
          case 1:
            cy.wrap(item).should('have.text', '2222');
            break;
          case 2:
            cy.wrap(item).should('have.text', '3333');
            break;
          default:
            cy.wrap(item).should('be.empty');
        }
      })
      .parent()
      .each((item, index) => {
        cy.wrap(item).should('have.css', 'border-color', 'rgb(0, 50, 255)');
      })
      .prev()
      .each((item, index) => {
        if (index === 1) {
          cy.wrap(item).should('have.text', 'head');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .next().next()
      .each((item, index) => {
        cy.wrap(item).should('have.text', `${index}`);
      })
      .next()
      .each((item, index) => {
        if (index === 2) {
          cy.wrap(item).should('have.text', 'tail');
        } else {
          cy.wrap(item).should('be.empty');
        }
      });

    // проверка правильности отрисовки, если после удаления в очереди осталось только
    // одно значение
    cy.contains('Удалить').click();
    cy.contains('Удалить').should('be.enabled');
    cy.get('p[data-testid="text-in-circle"]')
      .each((item, index) => {
        if (index === 2) {
          cy.wrap(item).should('have.text', '3333');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .parent()
      .prev()
      .each((item, index) => {
        if (index === 2) {
          cy.wrap(item).should('have.text', 'head');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .next().next().next()
      .each((item, index) => {
        if (index === 2) {
          cy.wrap(item).should('have.text', 'tail');
        } else {
          cy.wrap(item).should('be.empty');
        }
      });

    // проверка правильности удаления единственного значения из очереди
    cy.contains('Удалить').click();
    cy.contains('Очистить').should('be.enabled');
    cy.get('p[data-testid="text-in-circle"]')
      .each((item) => {
        cy.wrap(item).should('be.empty');
      })
      .parent()
      .prev()
      .each((item, index) => {
        if (index === 2) {
          cy.wrap(item).should('have.text', 'head');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .next().next().next()
      .each((item) => {
        cy.wrap(item).should('be.empty');
      });

    // проверка правильности добавления элемента после того, как ранее все элементы
    // были удалены
    cy.get('input[placeholder="Введите текст"]').type(`new`);
    cy.contains('Добавить').click();
    cy.get('p[data-testid="text-in-circle"]')
      .each((item, index) => {
        if (index === 2) {
          cy.wrap(item).should('have.text', 'new');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .parent()
      .prev()
      .each((item, index) => {
        if (index === 2) {
          cy.wrap(item).should('have.text', 'head');
        } else {
          cy.wrap(item).should('be.empty');
        }
      })
      .next().next().next()
      .each((item, index) => {
        if (index === 2) {
          cy.wrap(item).should('have.text', 'tail');
        } else {
          cy.wrap(item).should('be.empty');
        }
      });
  });

  it('Очистка очереди', () => {
    for (let i = 1; i <= 3; i++) {
      cy.get('input[placeholder="Введите текст"]').type(`${i}${i}${i}${i}`);
      cy.contains('Добавить').click();
      cy.contains('Удалить').should('be.enabled');
    }
    cy.contains('Очистить').click();
    cy.get('p[data-testid="text-in-circle"]')
      .each((item) => {
        cy.wrap(item).should('be.empty');
      })
      .parent()
      .prev()
      .each((item) => {
        cy.wrap(item).should('be.empty');
      })
      .next().next().next()
      .each((item, index) => {
        cy.wrap(item).should('be.empty');
      });
  });

});