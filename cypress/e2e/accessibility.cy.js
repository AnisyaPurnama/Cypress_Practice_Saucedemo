import LoginPage from '../pages/LoginPage.js/index.js';

describe('Accessibility checks', () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.injectAxe(); // Inject axe-core runtime into the page
  });

  it('Has no detectable a11y violations on load', () => {
    cy.checkA11y(); // Run accessibility checks
  });
});
