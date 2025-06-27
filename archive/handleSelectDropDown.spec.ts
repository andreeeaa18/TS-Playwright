import { test, expect } from "@playwright/test";

test("Handle select Dropdown with value and visible text", async ({ page }) => {
  await page.goto("https://artoftesting.com/samplesiteforselenium");
  //   await page.locator("#testingDropdown").selectOption("Database Testing");
  //   await page.locator("#testingDropdown").selectOption({ value: "Performance" });
  //   await page
  //     .locator("#testingDropdown")
  //     .selectOption({ label: "Database Testing" });
  await page.locator("#testingDropdown").selectOption({ index: 2 });
});

test("Handle select Dropdown with label", async ({ page }) => {
  await page.goto(
    "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label"
  );
  //   await page
  //     .locator('iframe[name="iframeResult"]')
  //     .contentFrame()
  //     .getByLabel("Choose a car:")
  //     .selectOption("Saab");
  await page
    .locator('iframe[name="iframeResult"]')
    .contentFrame()
    .getByLabel("Choose a car:")
    .selectOption({ label: "Audi" });
});

test("Handle multi select dropdown", async ({ page }) => {
  await page.goto("https://demoqa.com/select-menu");
  //   await page.locator("#cars").selectOption("Opel");

  await page.locator("#cars").selectOption(["Volvo", "Opel", "Audi"]);
});
