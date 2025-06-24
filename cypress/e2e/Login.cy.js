import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";

describe('Login Test', () => {
    beforeEach(() => {
        LoginPage.visit();
      });

    it('should log in successfully with valid credentials', () => {
        LoginPage.enterUsername("standard_user");
        LoginPage.enterPassword("secret_sauce");
        LoginPage.clickLogin();
        LoginPage.validateProductPage();
        MenuPage.loggingOut();
    });

    it('should show error validation for invalid user', () => {
        LoginPage.enterUsername("locked_out_user");
        LoginPage.enterPassword("secret_sauce");
        LoginPage.clickLogin();
        LoginPage.validateErrorLoginMessage();
      });
});