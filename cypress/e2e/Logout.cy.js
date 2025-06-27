import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";

describe('Log out', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.enterUsername("standard_user");
        LoginPage.enterPassword("secret_sauce");
        LoginPage.clickLogin();
    });
    
    it('should log out successfully', () => {
        MenuPage.loggingOut();
    });
});