class CheckoutPage {
    shoppingCart = ('[data-test="shopping-cart-link"]');
    checkoutBtn = ('[data-test="checkout"]');
    firstNameTextField = ('[data-test="firstName"]');
    lastNameTextField = ('[data-test="lastName"]');
    postCodeTextField = ('[data-test="postalCode"]');
    continueBtn = ('[data-test="continue"]');
    finishBtn = ('[data-test="finish"]');
    backBtn = ('[data-test="back-to-products"]');
    thankyouText = ('[data-test="complete-text"]');

        
    navigateToShoppingCart() {
        cy.get(this.shoppingCart).click();
    }

    navigateToCheckoutPage() {
        cy.get(this.checkoutBtn).click();
    }

    enterFirstName(firstNameTextField) {
        cy.get(this.firstNameTextField).type(firstNameTextField);
    }

    enterLastName(lastNameTextField) {
        cy.get(this.lastNameTextField).type(lastNameTextField);
    }

    enterPostcode(postCodeTextField) {
        cy.get(this.postCodeTextField).type(postCodeTextField);
    }

    navigateToCheckoutOverview() {
        cy.get(this.continueBtn).click();
    }

    finishTheCheckout() {
        cy.get(this.finishBtn).click();
    }

    validateSuccessConfirmation() {
        cy.get(this.backBtn).should('be.visible');
        cy.get(this.thankyouText).should('be.visible');
    }
}

export default new CheckoutPage();