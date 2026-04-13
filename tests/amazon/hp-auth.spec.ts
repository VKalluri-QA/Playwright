// spec: specs/amazon_homepage_test_plan.md
// seed: seed.spec.ts
// Test Group 4: Sign-In Navigation
// Verified via Playwright MCP live session on 2026-04-05
// NOTE: No credentials used — navigation-only tests (no actual authentication)

import { test, expect } from '@playwright/test';

test.describe('Amazon Homepage - Sign-In Navigation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    // Dismiss the international shipping alert if present
    const dismissBtn = page.getByRole('button', { name: 'Dismiss' });
    if (await dismissBtn.isVisible()) {
      await dismissBtn.click();
    }
  });

  test('TC_AUTH_001 - Click "Hello, sign in" navigates to sign-in page', async ({ page }) => {
    // Verified from live snapshot: link URL → https://www.amazon.com/ap/signin?...
    const signInLink = page.getByRole('link', { name: /Hello, sign in/i });
    await signInLink.click();

    // Verify URL contains the sign-in path
    await expect(page).toHaveURL(/amazon\.com\/ap\/signin|ap\/signin/i);
  });

  test('TC_AUTH_002 - Verify sign-in page loads after navigation', async ({ page }) => {
    // Click sign-in and verify the sign-in page title/content loads
    const signInLink = page.getByRole('link', { name: /Hello, sign in/i });
    await signInLink.click();

    // Page title should change from the homepage title
    await expect(page).not.toHaveTitle('Amazon.com. Spend less. Smile more.');
  });

});
