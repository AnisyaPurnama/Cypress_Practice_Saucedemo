import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I am logged in as {string} with password {string}', (username, password) => {
        LoginPage.visit();
        LoginPage.enterUsername(username);
        LoginPage.enterPassword(password);
        LoginPage.clickLogin();
    });
    
When('I log out from the menu', () => {
  MenuPage.loggingOut();
});

Then('I should be redirected to the login page', () => {
  cy.url().should('include', 'saucedemo.com');
});