import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import ProductPage from "../../pages/ProductPage";
import CheckoutPage from "../../pages/CheckoutPage";

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
When("the user adds a backpack to the cart", () => {
  ProductPage.clickAddToCartBackpack();
});

When("the user proceeds to checkout", () => {
  CheckoutPage.navigateToShoppingCart();
  CheckoutPage.navigateToCheckoutPage();
});

When("the user enters checkout information:", (dataTable) => {
  const data = dataTable.rowsHash();
  CheckoutPage.enterFirstName(data.firstName);
  CheckoutPage.enterLastName(data.lastName);
  CheckoutPage.enterPostcode(data.postcode);
  CheckoutPage.navigateToCheckoutOverview();
});

When("the user completes the checkout", () => {
  CheckoutPage.finishTheCheckout();
});

// ---------- THEN ----------
Then("the order should be confirmed successfully", () => {
  CheckoutPage.validateSuccessConfirmation();
});