import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { Env } from '../utils/env';
import { Logger } from '../utils/logger';

test.describe('Login Tests', () => {
  test('should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo(Env.BASE_URL);
    Logger.info('Navigated to login page');

    await loginPage.login('testuser', 'testpassword');
    Logger.info('Logged in successfully');
    await expect(page).toHaveURL(/dashboard/);
  });
});
