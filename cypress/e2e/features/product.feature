Feature: Product Page Functionality

  Background:
    Given the user is logged in as "standard_user"

  Scenario: Add a backpack to the cart
    When the user adds the backpack to the cart
    Then the backpack should be added successfully

  Scenario: Display all products
    Then all products should be visible
