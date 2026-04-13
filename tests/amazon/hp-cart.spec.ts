// spec: specs/amazon_homepage_test_plan.md
// seed: seed.spec.ts
// Test Group 5: Cart
// Verified via Playwright MCP live session on 2026-04-05
// Verified fact: "0 items in cart" link with URL /gp/cart/view.html

import { test, expect } from '@playwright/test';

test.describe('Amazon Homepage - Cart', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    // Dismiss the international shipping alert if present
    const dismissBtn = page.getByRole('button', { name: 'Dismiss' });
    if (await dismissBtn.isVisible()) {
      await dismissBtn.click();
    }
  });

  test('TC_CART_001 - Verify cart shows "0 items" for guest/unauthenticated user', async ({ page }) => {
    // Verified from live snapshot: "0 items in cart" for guest session
    const cartLink = page.getByRole('link', { name: /0 items in cart/i });
    await expect(cartLink).toBeVisible();

    // Verify the count text "0" is present inside the cart
    const cartCount = page.locator('#nav-cart-count');
    await expect(cartCount).toHaveText('0');
  });

  test('TC_CART_002 - Click cart icon navigates to cart page', async ({ page }) => {
    // Verified from live snapshot: cart URL = /gp/cart/view.html?ref_=nav_cart
    const cartLink = page.getByRole('link', { name: /0 items in cart/i });
    await cartLink.click();

    // Verify URL navigates to the cart or sign-in page
    await expect(page).toHaveURL(/gp\/cart\/view\.html|signin/i);
  });

});
