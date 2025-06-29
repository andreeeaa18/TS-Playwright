import { expect } from "@playwright/test";
import { test } from "../fixtures/POMFixtures";
import { homePage } from "../pages/homePage";
import { cartPage } from "../pages/cartPage";

test("Verification of Cart", async ({
  page,
  loginPageF,
  homePageF,
  cartPageF,
}) => {
  await loginPageF.openApp();
  await loginPageF.login("standard_user", "secret_sauce");

  await expect(homePageF.homePageTitle).toHaveText("Swag Labs");
  await homePageF.addToCart();
  await expect(homePageF.cartIcon).toHaveText("1");
  await expect(homePageF.backpackRemove).toBeVisible();
  await homePageF.gotToCart();

  await expect(cartPageF.backpackItem).toHaveText("Sauce Labs Backpack");
});
