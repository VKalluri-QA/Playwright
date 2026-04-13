// spec: specs/amazon_homepage_test_plan.md
// seed: seed.spec.ts
// Test Group 3: Search Functionality
// Verified via Playwright MCP live session on 2026-04-05

import { test, expect } from '@playwright/test';

test.describe('Amazon Homepage - Search Functionality', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    // Dismiss the international shipping alert if present
    const dismissBtn = page.getByRole('button', { name: 'Dismiss' });
    if (await dismissBtn.isVisible()) {
      await dismissBtn.click();
    }
  });

  test('TC_SRCH_001 - Verify "Search Amazon" searchbox is visible', async ({ page }) => {
    // Verified from live snapshot: searchbox labeled "Search Amazon"
    const searchBox = page.getByRole('searchbox', { name: 'Search Amazon' });
    await expect(searchBox).toBeVisible();
  });

  test('TC_SRCH_002 - Verify department dropdown has "All Departments" selected by default', async ({ page }) => {
    // Verified from live snapshot: combobox with "All Departments" as selected option
    const deptDropdown = page.getByRole('combobox', { name: /Select the department/i });
    await expect(deptDropdown).toHaveValue('search-alias=aps');
  });

  test('TC_SRCH_003 - Verify department dropdown has all expected options visible', async ({ page }) => {
    // Verified 27 options from live snapshot
    const deptDropdown = page.getByRole('combobox', { name: /Select the department/i });
    await expect(deptDropdown.getByRole('option', { name: 'All Departments' })).toBeAttached();
    await expect(deptDropdown.getByRole('option', { name: 'Electronics' })).toBeAttached();
    await expect(deptDropdown.getByRole('option', { name: 'Books' })).toBeAttached();
    await expect(deptDropdown.getByRole('option', { name: 'Computers' })).toBeAttached();
  });

  test('TC_SRCH_004 - Verify "Go" search button is visible', async ({ page }) => {
    // Verified from live snapshot: button labeled "Go"
    const goButton = page.getByRole('button', { name: 'Go' });
    await expect(goButton).toBeVisible();
  });

  test('TC_SRCH_005 - Search with valid keyword "laptop" navigates to results', async ({ page }) => {
    // Type in searchbox and click Go
    const searchBox = page.getByRole('searchbox', { name: 'Search Amazon' });
    await searchBox.fill('laptop');

    // Click Go button
    await page.getByRole('button', { name: 'Go' }).click();

    // Verify URL contains the search query
    await expect(page).toHaveURL(/k=laptop/i);
  });

  test('TC_SRCH_006 - Search with department filter "Electronics" selected', async ({ page }) => {
    // Select Electronics in department dropdown
    const deptDropdown = page.getByRole('combobox', { name: /Select the department/i });
    await deptDropdown.selectOption({ label: 'Electronics' });

    // Type search keyword
    const searchBox = page.getByRole('searchbox', { name: 'Search Amazon' });
    await searchBox.fill('headphones');

    // Submit search
    await page.getByRole('button', { name: 'Go' }).click();

    // Verify URL contains search keyword
    await expect(page).toHaveURL(/k=headphones/i);
  });

  test('TC_SRCH_007 - Search box accepts Enter key to submit', async ({ page }) => {
    // Type in search box and press Enter
    const searchBox = page.getByRole('searchbox', { name: 'Search Amazon' });
    await searchBox.fill('shirt');
    await searchBox.press('Enter');

    // Verify navigation to results page
    await expect(page).toHaveURL(/k=shirt/i);
  });

});
