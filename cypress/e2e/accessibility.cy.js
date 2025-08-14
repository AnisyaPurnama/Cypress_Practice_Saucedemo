import LoginPage from '../pages/LoginPage.js';

describe('Accessibility checks', () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.injectAxe(); // Inject axe-core runtime into the page
  });

  it('It should log any accesibility failures', () => {
    cy.checkA11y();
  });

  it('should exclude specific elements on the page', () => {
    cy.checkA11y({ exclude: [] });
  });

  it('should only test specific elements on teh page'), () => {
    cy.checkA11y('.login-box');
  }
});
