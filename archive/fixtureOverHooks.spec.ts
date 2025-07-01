import { test, expect } from "../fixtures/hooksFixture";

test("Adding item to Cart verification", async ({
  page,
  loginLogoutFixture,
}) => {
  await page.getByText("Sauce Labs BackPack").click();
  await page.getByTestId("add-to-cart").click();
  await page.getByTestId("shopping-cart-link").click();
  await expect(page.getByTestId("item-4-title-link")).toHaveText(
    "Sauce Labs Backpack"
  );
  await expect(page.getByTestId("remove-sauce-labs-backpack")).toBeVisible();
  await page.getByTestId("remove-sauce-labs-backpack").click();
  await expect(page.getByTestId("item-4-title-link")).not.toBeVisible();
});

// test("Empty Cart Verification", async ({ page }) => {
//   // await page.getByTestId("shopping-cart-link").click();
//   await expect(page.locator(".inventory_item_name")).not.toBeVisible();
// });
