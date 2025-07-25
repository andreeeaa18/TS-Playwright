import { test, expect } from "@playwright/test";

test("Login Setup", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

  await page.context().storageState({ path: "./playwright/.auth/auth.json" });
});
