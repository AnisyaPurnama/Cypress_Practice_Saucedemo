import LoginPage from '../pages/LoginPage.js';
import ProductPage from '../pages/ProductPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';

describe('Accessibility checks for login page', () => {
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

  // it('should only test specific elements on the page'),
  //   () => {
  //     cy.checkA11y('.login-box');
  //   };
});

describe('Accessibility checks for product page', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    ProductPage.validateProductPage();
    cy.injectAxe();
  });

  it('It should log any accesibility failures', () => {
    cy.checkA11y();
  });
});

describe('Accessibility checks for cart page', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    ProductPage.clickAddToCartBackpack();
    cy.wait(2000);
    CheckoutPage.navigateToShoppingCart();
    cy.injectAxe();
  });

  it('It should log any accesibility failures', () => {
    cy.checkA11y();
  });
});

describe('Accessibility checks for checkout page', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    ProductPage.clickAddToCartBackpack();
    cy.wait(2000);
    CheckoutPage.navigateToShoppingCart();
    CheckoutPage.navigateToCheckoutPage();
    cy.injectAxe();
  });

  it('It should log any accesibility failures', () => {
    cy.checkA11y();
  });
});
