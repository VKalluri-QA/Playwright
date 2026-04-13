// spec: specs/amazon_homepage_test_plan.md
// seed: seed.spec.ts
// Test Group 2: Navigation Bar Elements
// Verified via Playwright MCP live session on 2026-04-05

import { test, expect } from '@playwright/test';

test.describe('Amazon Homepage - Navigation Bar', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    // Dismiss the international shipping alert if present
    const dismissBtn = page.getByRole('button', { name: 'Dismiss' });
    if (await dismissBtn.isVisible()) {
      await dismissBtn.click();
    }
  });

  test('TC_NAV_001 - Verify "Hello, sign in Account & Lists" link is visible', async ({ page }) => {
    // Verified label from live snapshot: "Hello, sign in Account & Lists"
    const signInLink = page.getByRole('link', { name: /Hello, sign in/i });
    await expect(signInLink).toBeVisible();
  });

  test('TC_NAV_002 - Verify "Returns & Orders" link is visible', async ({ page }) => {
    // Verified from live snapshot
    const returnsLink = page.getByRole('link', { name: /Returns.*Orders/i });
    await expect(returnsLink).toBeVisible();
  });

  test('TC_NAV_003 - Verify cart link shows "0 items in cart"', async ({ page }) => {
    // Verified from live snapshot: "0 items in cart" link
    const cartLink = page.getByRole('link', { name: /0 items in cart/i });
    await expect(cartLink).toBeVisible();
  });

  test('TC_NAV_004 - Verify "Deliver to" button is visible', async ({ page }) => {
    // Verified from live snapshot: "Deliver to India" button
    const deliverBtn = page.getByRole('button', { name: /Deliver to/i });
    await expect(deliverBtn).toBeVisible();
  });

  test('TC_NAV_005 - Verify language/country selector is visible', async ({ page }) => {
    // Verified from live snapshot: EN language link
    const langSelector = page.getByRole('link', { name: /Choose a language/i });
    await expect(langSelector).toBeVisible();
  });

  test('TC_NAV_006 - Verify "Today\'s Deals" link is visible', async ({ page }) => {
    // Verified from live snapshot primary nav list
    const dealsLink = page.getByRole('link', { name: "Today's Deals" });
    await expect(dealsLink).toBeVisible();
  });

  test('TC_NAV_007 - Verify "Gift Cards" link is visible', async ({ page }) => {
    const giftCardsLink = page.getByRole('link', { name: 'Gift Cards' });
    await expect(giftCardsLink).toBeVisible();
  });

  test('TC_NAV_008 - Verify "Customer Service" link is visible', async ({ page }) => {
    const customerServiceLink = page.getByRole('link', { name: 'Customer Service' });
    await expect(customerServiceLink).toBeVisible();
  });

  test('TC_NAV_009 - Verify "Open All Categories Menu" hamburger button is visible', async ({ page }) => {
    // Verified from live snapshot: "Open All Categories Menu" button
    const allCategoriesBtn = page.getByRole('button', { name: 'Open All Categories Menu' });
    await expect(allCategoriesBtn).toBeVisible();
  });

  test('TC_NAV_010 - Click "Returns & Orders" navigates to order history', async ({ page }) => {
    // Verified URL from live snapshot: /gp/css/order-history
    const returnsLink = page.getByRole('link', { name: /Returns.*Orders/i });
    await returnsLink.click();
    await expect(page).toHaveURL(/gp\/css\/order-history|signin/);
  });

});
