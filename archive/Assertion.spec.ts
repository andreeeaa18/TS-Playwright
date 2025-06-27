import { test, expect } from "@playwright/test";

test("Assertion Practice", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByTestId("login-button");

  await expect(page.getByTestId("login-button")).toHaveCount(1);
  await expect(page.getByTestId("login-button")).toBeEnabled();
  //   await expect(page.getByTestId("login-button")).toBeDisabled();
  //   await expect.soft(page.getByTestId("login-button")).toBeDisabled();
  await expect(page.getByTestId("login-button")).toBeVisible();
  //   await expect(page.getByTestId("login-button")).toBeHidden();
  await expect(page.getByTestId("login-button")).toHaveText("Login");
  await expect(page.getByTestId("login-button")).toHaveAttribute(
    "name",
    "login-button"
  );
  await expect(page.getByTestId("login-button")).toHaveId("login-button");
  await expect(page).toHaveURL("https://www.saucedemo.com");
  await expect(page).toHaveTitle("Swag Labs");

  //   await expect(page, "This is a custom error for practice").not.toHaveTitle(
  //     "Swag Labs"
  //   );
});

test("Successful Login Verification", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByTestId("username").fill("standard_user");
  await page.getByTestId("password").fill("secret_sauce");
  await page.getByTestId("login-button").click();
  await expect(page.getByTestId("shopping-cart-link")).toBeVisible();
});

// test("Unsuccessful Login Verification", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com");
//   await page.getByTestId("username").fill("standard_user_wrong");
//   await page.getByTestId("password").fill("secret_sauce");
//   await page.getByTestId("login-button").click();
//   await expect(page.getByTestId("shopping-cart-link")).toBeVisible();
// });
