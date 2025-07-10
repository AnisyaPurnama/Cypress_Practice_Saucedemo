import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import ProductPage from "../../pages/ProductPage";

// ---------- GIVEN ----------
Given("the user is logged in as {string}", (username) => {
  cy.clearCookies();
  LoginPage.visit();
  LoginPage.enterUsername(username);
  LoginPage.enterPassword("secret_sauce");
  LoginPage.clickLogin();
  ProductPage.validateProductPage();
});

// ---------- WHEN ----------
When("the user adds the backpack to the cart", () => {
  cy.wait(2000);
  ProductPage.clickAddToCartBackpack();
});

// ---------- THEN ----------
Then("the backpack should be added successfully", () => {
  cy.get(".shopping_cart_badge").should("contain", "1");
});

Then("all products should be visible", () => {
  ProductPage.getInventoryItems().should("have.length.greaterThan", 0);
});
