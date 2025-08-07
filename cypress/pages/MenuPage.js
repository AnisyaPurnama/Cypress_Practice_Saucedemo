class MenuPage {
    menuBtn = '#react-burger-menu-btn';
    logoutBtn = '[data-test="logout-sidebar-link"]';

    loggingOut() {
        cy.get(this.menuBtn).click();
        cy.get(this.logoutBtn).click();
    }
}

export default new MenuPage();


