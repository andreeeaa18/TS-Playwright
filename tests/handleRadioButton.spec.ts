import { test, expect } from "@playwright/test";

test("Handle Radio Button", async ({ page }) => {
  await page.goto("https://artoftesting.com/samplesiteforselenium");
  const maleRadio = page.locator("#male");
  maleRadio.check();
  await expect(maleRadio).toBeChecked();
  await page.locator("#female").check();
  await expect(maleRadio).not.toBeChecked();
});
