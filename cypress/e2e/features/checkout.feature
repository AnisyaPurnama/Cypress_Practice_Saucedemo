Feature: Checkout Functionality

  Background:
    Given the user is logged in as "standard_user"

  Scenario: Complete a successful checkout
    When the user adds a backpack to the cart
    And the user proceeds to checkout
    And the user enters checkout information:
      | firstName | lastName | postcode |
      | Rurouni   | Kenshin  | 9000     |
    And the user completes the checkout
    Then the order should be confirmed successfully
