import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";

describe('Add to cart', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.enterStandardUsername("standard_user");
        LoginPage.enterPassword("secret_sauce");
        LoginPage.clickLogin();
    });
    
    it('should add an item to the cart', () => {
        cy.wait(2000);
        ProductPage.clickAddToCartBackpack();
    });
});

