import ProductPage from '../pages/ProductPage';
import LoginPage from '../pages/LoginPage';

describe('Add to cart', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    ProductPage.validateProductPage();
  });

  it('should add an item to the cart', () => {
    cy.wait(2000);
    ProductPage.clickAddToCartBackpack();
  });

  it('should display 6 products on the product inventory page', () => {
    ProductPage.validateAmountInventory();
  });
});
