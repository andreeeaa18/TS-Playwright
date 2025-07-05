import { test } from "../fixtures/testDataFixtures";
import { expect } from "@playwright/test";

test.beforeEach("Login", async ({ page, loginData }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page
    .getByRole("textbox", { name: "Username" })
    .fill(loginData.username);
  await page
    .getByRole("textbox", { name: "Password" })
    .fill(loginData.password);
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});

test("Add candidate for recruitment", async ({ page, testData }) => {
  await page.getByRole("link", { name: "Recruitment" }).click();
  await page.getByRole("button", { name: " Add" }).click();
  await expect(page.locator("#app")).toContainText("Add Candidate");
  await page.getByPlaceholder("First Name").fill(testData.fName);
  await page.getByPlaceholder("Last Name").fill(testData.lName);
  await page.getByPlaceholder("Middle Name").fill(testData.mName);
  await page.getByPlaceholder("Type here").first().fill(testData.email);
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("Application Stage")).toBeVisible();
});
