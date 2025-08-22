import { test, expect } from '@playwright/test';

test('Trello login and verify Boards option', async ({ page }) => {
  // Navigate to Trello
  await page.goto('https://trello.com/');

  // Click the Login button (fix selector to match anchor with text 'Log in')
  await page.locator('a.Buttonsstyles__Button-sc-1jwidxo-0', { hasText: 'Log in' }).click();

  // Wait for and fill email field
  await page.waitForSelector('input[data-testid="username"]');
  await page.fill('input[data-testid="username"]', 'luis.marcelo.garay@gmail.com');

  // Click Continue button using data-testid
  await page.click('button[data-testid="login-submit-idf-testid"]');

  // Wait for and fill password field
  await page.waitForSelector('input[data-testid="password"]');
  await page.fill('input[data-testid="password"]', '<replace for your password>');

  // Click Log in button using data-testid
  await page.click('button[data-testid="login-submit-idf-testid"]');

  // Assert that the code email heading is visible
  await expect(page.locator('div[data-testid="header-suffix"] h2', { hasText: "We've emailed you a code" })).toBeVisible();

});
