class ProductPage {
    backpackAddToCartBtn = '#add-to-cart-sauce-labs-backpack';
    inventoryItem = '.inventory_item';
    addToCartButtons = '[data-test^="add-to-cart"]';
    cartBadge = '.shopping_cart_badge';
    sortDropdown = '[data-test="product_sort_container"]';

    clickAddToCartBackpack() {
        cy.get(this.backpackAddToCartBtn).click();
    }

    validateProductPage() {
        cy.url().should('include', '/inventory');
    }

    validateAmountInventory() {
        cy.get(this.inventoryItem).should('have.lenght', 6);
    }

    getInventoryItems() {
        return cy.get(this.inventoryItem);
    }

    addFirstProductToCart() {
        cy.get(this.addToCartButtons).first().click();
    }

    verifyCartCount(count) {
        cy.get(this.cartBadge).should('contain.text', count);
    }

    sortBy(option) {
        cy.get(this.sortDropdown).select(option);
    }
}

export default new ProductPage();