import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByTestId("username").fill("standard_user");
  await page.getByTestId("password").fill("secret_sauce");
  await page.getByTestId("login-button").click();
});

test("Adding item to Cart verification", async ({ page }) => {
  await page.getByText("Sauce Labs BackPack").click();
  await page.getByTestId("add-to-cart").click();
  await page.getByTestId("shopping-cart-link").click();
  await expect(page.getByTestId("item-4-title-link")).toHaveText(
    "Sauce Labs Backpack"
  );
  await expect(page.getByTestId("remove-sauce-labs-backpack")).toBeVisible();
  await page.getByTestId("remove-sauce-labs-backpack").click();
  await expect(page.getByTestId("item-4-title-link")).not.toBeVisible();
});

test("Empty Cart Verification", async ({ page }) => {
  await page.getByTestId("shopping-cart-link").click();
  await expect(page.locator(".inventory_item_name")).not.toBeVisible();
});
