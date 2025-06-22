import { test } from "@playwright/test";

test("Practice of Locator Method", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.locator("//*[@name='user-name']").fill("standard_user");
  await page.locator("input#password").fill("secret_sauce");
  // await page.locator(".submit-button").click();
  await page.locator("input[value=Login]").click();
  await page.locator("text='Sauce Labs Backpack'").click();
  // await page.locator("id=add-to-cart").click()
  await page.locator("data-test=add-to-cart").click();
});

test("Practice of Locator Method with Options", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page
    .locator(".form_group", { has: page.locator("input#user-name") })
    .click();
  await page
    .locator(".form_group", { has: page.locator("input#user-name") })
    .pressSequentially("standard_user");

  await page
    .locator(".form_group", { hasNot: page.locator("input#user-name") })
    .click();
  await page
    .locator(".form_group", { hasNot: page.locator("input#user-name") })
    .pressSequentially("secret_sauce");

  await page.locator("#login-button").click();
  // await page.locator("//a", { hasText: "Sauce Labs Backpack" }).click();
  await page.locator(".inventory_item_name", { hasNotText: /Sauce.*/ }).click();
});
