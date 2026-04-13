// spec: specs/amazon_homepage_test_plan.md
// seed: seed.spec.ts
// Test Group 7: International Alert Dialog
// Verified via Playwright MCP live session on 2026-04-05
// Verified element: alertdialog "International Shopping Transition Alert"
//   - Text: "We're showing you items that ship to India"
//   - Buttons: "Dismiss" and "Change Address"

import { test, expect } from '@playwright/test';

test.describe('Amazon Homepage - International Alert Dialog', () => {

  test('TC_INTL_001 - Verify international shipping alert dialog appears on page load', async ({ page }) => {
    await page.goto('https://www.amazon.com/');

    // Verified from live snapshot: alertdialog "International Shopping Transition Alert"
    const alertDialog = page.getByRole('alertdialog', { name: 'International Shopping Transition Alert' });
    await expect(alertDialog).toBeVisible();

    // Verify the alert dialog contains expected text
    await expect(alertDialog).toContainText('We\'re showing you items that ship to');
  });

  test('TC_INTL_002 - Click "Dismiss" button closes the international alert', async ({ page }) => {
    await page.goto('https://www.amazon.com/');

    // Verified from live snapshot: "Dismiss" button inside the alert dialog
    const alertDialog = page.getByRole('alertdialog', { name: 'International Shopping Transition Alert' });
    await expect(alertDialog).toBeVisible();

    // Click the Dismiss button
    const dismissBtn = alertDialog.getByText('Dismiss');
    await dismissBtn.click();

    // Alert dialog should no longer be visible
    await expect(alertDialog).not.toBeVisible();
  });

  test('TC_INTL_003 - Verify "Change Address" button is visible in the dialog', async ({ page }) => {
    await page.goto('https://www.amazon.com/');

    // Verified from live snapshot: "Change Address" button present in alert dialog
    const alertDialog = page.getByRole('alertdialog', { name: 'International Shopping Transition Alert' });
    await expect(alertDialog).toBeVisible();

    const changeAddressBtn = alertDialog.getByText('Change Address');
    await expect(changeAddressBtn).toBeVisible();
  });

});
