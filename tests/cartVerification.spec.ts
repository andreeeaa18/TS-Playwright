import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { homePage } from "../pages/homePage";
import { cartPage } from "../pages/cartPage";

test("Verification of Cart", async ({ page }) => {
  const loginPageObj = new loginPage(page);
  await loginPageObj.openApp();
  await loginPageObj.login("standard_user", "secret_sauce");

  const homePageObj = new homePage(page);
  await expect(homePageObj.homePageTitle).toHaveText("Swag Labs");
  await homePageObj.addToCart();
  await expect(homePageObj.cartIcon).toHaveText("1");
  await expect(homePageObj.backpackRemove).toBeVisible();
  await homePageObj.gotToCart();

  const cartPageObj = new cartPage(page);
  await expect(cartPageObj.backpackItem).toHaveText("Sauce Labs Backpack");
});
