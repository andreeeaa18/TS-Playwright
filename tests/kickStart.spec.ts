import { test } from "@playwright/test";
import { log } from "console";

test("Kick Start", async ({ page }) => {
  await page.goto("https://www.google.com");
  await page.getByRole("button", { name: "Aplicații Google" }).click();
  console.log("My first test with TS");
});

test("My 2nd Test Case", () => {
  console.log("Second Test Script");
});
