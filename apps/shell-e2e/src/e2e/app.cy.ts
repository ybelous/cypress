import { getGreeting } from '../support/app.po';

describe('shell', () => {
  beforeEach(() => cy.visit('/'));
  it('должно быть имя Юля', () => {
    cy.get('div').contains('Юля')
    cy.get('input').type('Юля')
    cy.get('input').should('have.value','Юля')
  })


  // it('should display welcome message', () => {
  //   // Custom command example, see `../support/commands.ts` file
  //   cy.login('my-email@something.com', 'myPassword');

  //   // Function helper example, see `../support/app.po.ts` file
  //   getGreeting().contains('Welcome shell');
  // });
});
