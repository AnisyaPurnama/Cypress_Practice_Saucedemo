Feature: Login Functionality

  Background: 
    Given the user is on the login page

  Scenario: Successful login with valid credentials
    When the user logs in with username "standard_user" and password "secret_sauce"
    Then the user should be redirected to the products page
    And the user logs out successfully

  Scenario: Login attempt by locked out user
    When the user logs in with username "locked_out_user" and password "secret_sauce"
    Then an error message should be displayed

  Scenario: Successful login with problem user
    When the user logs in with username "problem_user" and password "secret_sauce"
    Then the user should be redirected to the products page
    And the user logs out successfully

  Scenario: Successful login with performance glitch user
    When the user logs in with username "performance_glitch_user" and password "secret_sauce"
    Then the user should be redirected to the products page
    And the user logs out successfully

  Scenario: Login with valid username and invalid password
    When the user logs in with username "standard_user" and password "wrong_password"
    Then an error message should be displayed

  Scenario: Login with empty username
    When the user enters password "secret_sauce" only and clicks login
    Then an error message should be displayed

  Scenario: Login with empty password
    When the user enters username "standard_user" only and clicks login
    Then an error message should be displayed

  Scenario: Login with empty username and password
    When the user clicks login without entering credentials
    Then an error message should be displayed
