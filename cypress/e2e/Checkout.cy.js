import CheckoutPage from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';

/// <reference types="cypress" />

describe('Checkout', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    ProductPage.clickAddToCartBackpack();
  });

  it('should navigate to success order page', () => {
    cy.wait(2000);
    CheckoutPage.navigateToShoppingCart();
    CheckoutPage.navigateToCheckoutPage();
    CheckoutPage.enterFirstName('Rurouni');
    CheckoutPage.enterLastName('Kenshin');
    CheckoutPage.enterPostcode('9000');
    CheckoutPage.navigateToCheckoutOverview();
    CheckoutPage.finishTheCheckout();
    CheckoutPage.validateSuccessConfirmation();
  });
});
