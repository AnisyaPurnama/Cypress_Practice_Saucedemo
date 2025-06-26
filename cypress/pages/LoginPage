class LoginPage {
    username = '[data-test="username"]';
    password = '[data-test="password"]';
    loginButton = ".submit-button";
    errorMessage = '[data-test="error"]';

    visit() {
        cy.visit('https://www.saucedemo.com/', { failOnStatusCode: false });
    }

    enterUsername(username) {
        cy.get(this.username).type(username);
    }

    enterPassword(password) {
        cy.get(this.password).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    validateLoginPage() {
        cy.get(this.loginButton).should('be.visible');
    }

    validateErrorLoginMessage() {
        cy.get(this.errorMessage).should('be.visible');
    }
}

export default new LoginPage();