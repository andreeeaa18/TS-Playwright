import { test, expect } from "@playwright/test";

// test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //   await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  //   await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  //   await page.getByRole("button", { name: "Login" }).click();
  //   await page.waitForURL(
  //     "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  //   );
  //   await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});

test("Verify Apply leave card navigationon on Dashborad page", async ({
  page,
}) => {
  await page.getByRole("button", { name: "Apply Leave" }).click();
  await page.getByRole("heading", { name: "Apply Leave" }).click();
  await page.getByRole("link", { name: "My Leave" }).click();
});
