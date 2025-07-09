Feature: Log out

Background:
    Given I am logged in as "standard_user" with password "secret_sauce"

  Scenario: Successful logout
    When I log out from the menu
    Then I should be redirected to the login page

