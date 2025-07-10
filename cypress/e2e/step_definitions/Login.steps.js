import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";
import ProductPage from "../pages/ProductPage";
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const users = {
    standard: "standard_user",
    locked: "locked_out_user",
    problem: "problem_user",
    glitch: "performance_glitch_user",
    error: "error_user",
    visual: "visual_user",
    invalid: "invalid_user"
  };

  const password = "secret_sauce";

describe('Login Test', () => {

    beforeEach(() => {
        cy.clearCookies();
        LoginPage.visit();
      });

    it('should log in successfully with valid credentials', () => {
        LoginPage.enterUsername(users.standard);
        LoginPage.enterPassword(password);
        LoginPage.clickLogin();
        ProductPage.validateProductPage();
        MenuPage.loggingOut();
    });

    it('should show error validation for invalid user', () => {
        LoginPage.enterUsername(users.locked);
        LoginPage.enterPassword(password);
        LoginPage.clickLogin();
        LoginPage.validateErrorLoginMessage();
      });

      it("should log in with problem user", () => {
        LoginPage.enterUsername(users.problem);
        LoginPage.enterPassword(password);
        LoginPage.clickLogin();
        ProductPage.validateProductPage();
        MenuPage.loggingOut();
      });

      it("should log in with performance glitch user", () => {
        LoginPage.enterUsername(users.glitch);
        LoginPage.enterPassword(password);
        LoginPage.clickLogin();
        cy.url({ timeout: 10000 }).should("include", "/inventory.html");
        MenuPage.loggingOut();
      });

      it("should show error for invalid password", () => {
        LoginPage.enterUsername(users.standard);
        LoginPage.enterPassword("wrong_password");
        LoginPage.clickLogin();
        LoginPage.validateErrorLoginMessage();
      });
    
      it("should show error for empty username", () => {
        LoginPage.enterPassword(password);
        LoginPage.clickLogin();
        LoginPage.validateErrorLoginMessage();
      });
    
      it("should show error for empty password", () => {
        LoginPage.enterUsername(users.standard);
        LoginPage.clickLogin();
        LoginPage.validateErrorLoginMessage();
      });
    
      it("should show error for empty username and password", () => {
        LoginPage.clickLogin();
        LoginPage.validateErrorLoginMessage();
      });
});