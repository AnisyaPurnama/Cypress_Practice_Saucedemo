import LoginPage from '../pages/LoginPage.js';
import MenuPage from '../pages/MenuPage.js';

describe('Log out', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
  });

  it('should log out successfully', () => {
    MenuPage.loggingOut();
  });
});
