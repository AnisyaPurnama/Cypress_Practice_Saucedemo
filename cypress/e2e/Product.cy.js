import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";

describe('Add to cart', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.enterUsername("standard_user");
        LoginPage.enterPassword("secret_sauce");
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

    it('should display all products', () => {
        ProductPage.getInventoryItems().should('have.length.greaterThan', 0);
      });
    
    it('should add a product to cart', () => {
        ProductPage.addFirstProductToCart();
        ProductPage.verifyCartCount(1);
    });
    
    it('should sort products by price (low to high)', () => {
        ProductPage.sortBy('lohi');
    });
    
    it('should sort products by price (high to low)', () => {
        ProductPage.sortBy('hilo');
    });
    
    it('should sort products by name (A to Z)', () => {
        ProductPage.sortBy('az');
    });
    
    it('should sort products by name (Z to A)', () => {
        ProductPage.sortBy('za');
    });
});

