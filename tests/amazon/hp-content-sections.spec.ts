// spec: specs/amazon_homepage_test_plan.md
// seed: seed.spec.ts
// Test Group 8: Homepage Content Sections
// Verified via Playwright MCP live session on 2026-04-05
// All h2 headings verified from live accessibility snapshot

import { test, expect } from '@playwright/test';

test.describe('Amazon Homepage - Content Sections', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    // Dismiss the international shipping alert if present
    const dismissBtn = page.getByRole('button', { name: 'Dismiss' });
    if (await dismissBtn.isVisible()) {
      await dismissBtn.click();
    }
  });

  test('TC_CONT_001 - Verify "Get your game on" section heading', async ({ page }) => {
    // Verified from live snapshot: h2 "Get your game on"
    const heading = page.getByRole('heading', { name: 'Get your game on', level: 2 });
    await expect(heading).toBeVisible();
  });

  test('TC_CONT_002 - Verify "New home arrivals under $50" section heading', async ({ page }) => {
    // Verified from live snapshot: h2 "New home arrivals under $50"
    const heading = page.getByRole('heading', { name: 'New home arrivals under $50', level: 2 });
    await expect(heading).toBeVisible();
  });

  test('TC_CONT_003 - Verify "Shop Fashion for less" section heading', async ({ page }) => {
    // Verified from live snapshot: h2 "Shop Fashion for less"
    const heading = page.getByRole('heading', { name: 'Shop Fashion for less', level: 2 });
    await expect(heading).toBeVisible();
  });

  test('TC_CONT_004 - Verify "Best Sellers in Clothing, Shoes & Jewelry" section heading', async ({ page }) => {
    // Verified from live snapshot: h2 "Best Sellers in Clothing, Shoes & Jewelry"
    const heading = page.getByRole('heading', { name: 'Best Sellers in Clothing, Shoes & Jewelry', level: 2 });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
  });

  test('TC_CONT_005 - Verify amazon.in cross-promo banner text', async ({ page }) => {
    // Verified from live snapshot: text "You are on amazon.com. You can also shop on Amazon India"
    const promoBanner = page.getByText(/You are on amazon\.com/i);
    await expect(promoBanner).toBeVisible();

    // Verify "Click here to go to amazon.in" link is present
    const amazonInLink = page.getByRole('link', { name: /Click here to go to amazon\.in/i });
    await expect(amazonInLink).toBeVisible();
  });

  test('TC_CONT_006 - Click "Kitchen & dining" category link navigates to results', async ({ page }) => {
    // Verified from live snapshot: link "Kitchen & dining" under "New home arrivals under $50"
    const kitchenLink = page.getByRole('link', { name: 'Kitchen & dining' });
    await kitchenLink.first().click();

    // Verify URL navigates to kitchen-related search results
    await expect(page).toHaveURL(/k=kitchen/i);
  });

  test('TC_CONT_007 - Click "Jeans under $50" fashion link navigates to deals page', async ({ page }) => {
    // Verified from live snapshot: link "Jeans under $50" under "Shop Fashion for less"
    const jeansLink = page.getByRole('link', { name: 'Jeans under $50' });
    await jeansLink.first().click();

    // Verify URL navigates to jeans related page
    await expect(page).toHaveURL(/k=Jeans|jeans|goldbox/i);
  });

  test('TC_CONT_008 - Verify "Level up your gaming" section heading', async ({ page }) => {
    // Verified from live snapshot: h2 "Level up your gaming"
    const heading = page.getByRole('heading', { name: 'Level up your gaming', level: 2 });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
  });

});
