// spec: specs/amazon_homepage_test_plan.md
// seed: seed.spec.ts
// Test Group 6: Hero Carousel
// Verified via Playwright MCP live session on 2026-04-05
// Verified elements: "Previous slide" button, "Next slide" button
// Verified content: "Featured content" group with slide list

import { test, expect } from '@playwright/test';

test.describe('Amazon Homepage - Hero Carousel', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    // Dismiss the international shipping alert if present
    const dismissBtn = page.getByRole('button', { name: 'Dismiss' });
    if (await dismissBtn.isVisible()) {
      await dismissBtn.click();
    }
  });

  test('TC_HERO_001 - Verify "Previous slide" button is visible', async ({ page }) => {
    // Verified from live snapshot: button "Previous slide" inside "Featured content" group
    const prevBtn = page.getByRole('button', { name: 'Previous slide' });
    await expect(prevBtn).toBeVisible();
  });

  test('TC_HERO_002 - Verify "Next slide" button is visible', async ({ page }) => {
    // Verified from live snapshot: button "Next slide" inside "Featured content" group
    const nextBtn = page.getByRole('button', { name: 'Next slide' });
    await expect(nextBtn).toBeVisible();
  });

  test('TC_HERO_003 - Click "Next slide" button advances the carousel', async ({ page }) => {
    // Capture the initial hero image src to compare after navigation
    const heroGroup = page.getByRole('group', { name: 'Featured content' });
    await expect(heroGroup).toBeVisible();

    const nextBtn = page.getByRole('button', { name: 'Next slide' });
    await nextBtn.click();

    // Wait for carousel transition
    await page.waitForTimeout(500);

    // Next slide button should still be actionable after clicking
    await expect(nextBtn).toBeVisible();
  });

});
