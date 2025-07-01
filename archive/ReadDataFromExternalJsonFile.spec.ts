import { test, expect } from "@playwright/test";
import data1 from "../test-data/testdata1.json";
import data2 from "../test-data/logindata.json";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByRole("textbox", { name: "Username" }).fill(data2.username);
  await page.getByRole("textbox", { name: "Password" }).fill(data2.password);
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});

test("Verify timesheet card navigationon on Dashborad page", async ({
  page,
}) => {
  await page.getByRole("button", { name: "Timesheets" }).click();
  await page.getByRole("link", { name: "Time" }).click();

  await page.getByLabel("Topbar Menu").getByText("Timesheets").click();
});

data1.forEach((data) => {
  test("Add candidate for recruitment" + data.firstName, async ({ page }) => {
    await page.getByRole("link", { name: "Recruitment" }).click();
    await page.getByRole("button", { name: " Add" }).click();
    await expect(page.locator("#app")).toContainText("Add Candidate");
    await page.getByPlaceholder("First Name").fill(data.firstName);
    await page.getByPlaceholder("Last Name").fill(data.lastName);
    await page.getByPlaceholder("Middle Name").fill(data.middleName);
    await page.getByPlaceholder("Type here").first().fill(data.email);
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.getByText("Application Stage")).toBeVisible();
  });
});
