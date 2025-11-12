// ✅ Test Demo: Check for a word in text
// Description: This test verifies that the word "Playwright" exists on the homepage
import { test, expect } from '@playwright/test';

test('check if word exists on Playwright homepage', async ({ page }) => {
    // 1. Go to Playwright homepage
    await page.goto('https://playwright.dev');

    // 2. Get the text content of the main page
    const content = await page.textContent('body');

    // 3. Define the word we want to check
    const targetWord = 'Playwright';

    // 4. Verify that the target word exists in the page content
    expect(content).toContain(targetWord);
});
