# Playwright Automation Portfolio

## 📌 Project Description

This repository contains my automated testing portfolio using **Playwright**. The goal of this project is to demonstrate my automation skills through real end-to-end UI tests.

## 🚀 Technologies Used

* JavaScript / TypeScript
* Playwright
* Node.js
* Git / GitHub

## 🧪 What This Project Includes

* Basic functional tests
* UI element visibility tests
* End-to-end workflow tests

## 🧪 Example Test

Here is an example of a simple test from this project:

```ts
// ✅ Test Example: Check for a specific word in text
// Description: This test verifies that a target word exists within a given text block
import { test, expect } from '@playwright/test';

test('check if word exists in text', async ({ page }) => {
    // 1. Go to a sample page (you can replace with real page)
    await page.goto('https://example.com');

    // 2. Get the content of the element
    const content = await page.textContent('#sample-text');

    // 3. Define the word we want to check
    const targetWord = 'Playwright';

    // 4. Verify that the target word exists in the content
    expect(content).toContain(targetWord);
});



## 🔧 Project Setup

1. Clone the repository:

```sh
git clone https://github.com/loky4k/playwright-automation-portfolio.git
```

2. Install dependencies:

```sh
npm install
```

3. Run tests:

```sh
npx playwright test
```

## ✅ Build / CI Status (GitHub Actions)

> *(Will be added soon)*

---

### ✨ Goal

Build a professional **Automation QA portfolio** showcasing the ability to create, structure, and maintain automated tests.

---

📩 For questions or collaboration: marian.iordan1999@gmail.com
