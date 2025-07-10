import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import ProductPage from "../../pages/ProductPage";
import MenuPage from "../../pages/MenuPage";

const password = "secret_sauce";

const users = {
  standard: "standard_user",
  locked: "locked_out_user",
  problem: "problem_user",
  glitch: "performance_glitch_user",
  error: "error_user",
  visual: "visual_user",
  invalid: "invalid_user"
};

// ---------- GIVEN ----------
Given("the user is on the login page", () => {
  cy.clearCookies();
  LoginPage.visit();
});

// ---------- WHEN ----------
When(
  "the user logs in with username {string} and password {string}",
  (username, pwd) => {
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(pwd);
    LoginPage.clickLogin();
  }
);

When("the user enters password {string} only and clicks login", (pwd) => {
  LoginPage.enterPassword(pwd);
  LoginPage.clickLogin();
});

When("the user enters username {string} only and clicks login", (username) => {
  LoginPage.enterUsername(username);
  LoginPage.clickLogin();
});

When("the user clicks login without entering credentials", () => {
  LoginPage.clickLogin();
});

// ---------- THEN ----------
Then("the user should be redirected to the products page", () => {
  ProductPage.validateProductPage();
});

Then("an error message should be displayed", () => {
  LoginPage.validateErrorLoginMessage();
});

Then("the user logs out successfully", () => {
  MenuPage.loggingOut();
});
