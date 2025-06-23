import { test, expect } from "@playwright/test";
import { TIMEOUT } from "dns";

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

test("Practice with getBy Methods", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/login");
  await page.getByLabel("Email").fill("testcodeautomaye@gmail.com");
  await page.getByPlaceholder("Search store").fill("Mobile");

  await expect(page.getByText("New Customer")).toBeVisible();
  const newCustomerText = await page
    .getByText("New Customer", { exact: true })
    .textContent();
  console.log("New Customer text:", newCustomerText);

  await page.getByAltText("nopCommerce demo store").click();

  // await page.locator("#PKVDd5").waitFor({ timeout: 2000 });
  // await page.locator("#PKVDd5").click();
  // await page.getByAltText("nopCommerce demo store").click();
  // await page
  //   .getByTitle("Show products in category Electronics")
  //   .first()
  //   .click();
});

test("Practice with getBy Methods #2", async ({ page }) => {
  // await page.goto("https://demo.nopcommerce.com/electronics");
  // await page.getByRole("button", { name: "Search" }).click();

  await page.goto("https://www.saucedemo.com");
  await page.getByTestId("username").fill("TestCodeAutomate");
});
