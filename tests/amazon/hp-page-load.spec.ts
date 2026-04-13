// spec: specs/amazon_homepage_test_plan.md
// seed: seed.spec.ts
// Test Group 1: Page Load & Title Verification
// Verified via Playwright MCP live session on 2026-04-05

import { test, expect } from '@playwright/test';

test.describe('Amazon Homepage - Page Load & Title', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to Amazon homepage before each test
    await page.goto('https://www.amazon.com/');
    // Dismiss the international shipping alert if present
    const dismissBtn = page.getByRole('button', { name: 'Dismiss' });
    if (await dismissBtn.isVisible()) {
      await dismissBtn.click();
    }
  });

  test('TC_HP_001 - Verify homepage loads successfully', async ({ page }) => {
    // Verify the URL is the Amazon homepage
    await expect(page).toHaveURL(/amazon\.com/);
  });

  test('TC_HP_002 - Verify page title is correct', async ({ page }) => {
    // Verify the exact page title observed via Playwright MCP
    await expect(page).toHaveTitle('Amazon.com. Spend less. Smile more.');
  });

  test('TC_HP_003 - Verify Amazon logo link is visible', async ({ page }) => {
    // Amazon logo is a link with accessible name "Amazon"
    const logoLink = page.getByRole('link', { name: 'Amazon' });
    await expect(logoLink).toBeVisible();
  });

});
