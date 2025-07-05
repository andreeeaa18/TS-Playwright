import { test, expect } from "@playwright/test";

test("Practice drag and drop", async ({ page }) => {
  //Manual Approach
  await page.goto("https://demoqa.com/droppable");
  //   page.getByText("Drag me", { exact: true }).hover();
  //   page.mouse.down();
  //   page.getByRole("tabpanel", { name: "Simple" }).locator("#droppable").hover();
  //   page.mouse.up();
  //   await expect(
  //     page.getByRole("tabpanel", { name: "Simple" }).locator("#droppable")
  //   ).toHaveText("Dropped!");
  // dragTo() method
  await page
    .getByText("Drag me", { exact: true })
    .dragTo(
      page.getByRole("tabpanel", { name: "Simple" }).locator("#droppable"),
      { sourcePosition: { x: 0, y: 0 }, targetPosition: { x: 149.9, y: 149.9 } }
    );
  await expect(
    page.getByRole("tabpanel", { name: "Simple" }).locator("#droppable")
  ).toHaveText("Dropped!");
});
