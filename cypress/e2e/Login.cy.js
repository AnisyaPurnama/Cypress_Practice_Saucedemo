import LoginPage from "../pages/LoginPage";

describe('Login Test', () => {
    it('should log in successfully', () => {
        LoginPage.visit();
        LoginPage.enterStandardUsername("standard_user");
        LoginPage.enterPassword("secret_sauce");
        LoginPage.clickLogin();
    });
});