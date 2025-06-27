class ProductPage {
    backpackAddToCartBtn = '#add-to-cart-sauce-labs-backpack';
    inventoryItem = '.inventory_item';

    clickAddToCartBackpack() {
        cy.get(this.backpackAddToCartBtn).click();
    }

    validateProductPage() {
        cy.url().should('include', '/inventory');
    }

    validateAmountInventory() {
        cy.get(this.inventoryItem).should('have.length', 6);
    }
}

export default new ProductPage();