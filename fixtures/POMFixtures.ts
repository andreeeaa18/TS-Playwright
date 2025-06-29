import { test as baseTest } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { homePage } from "../pages/homePage";
import { cartPage } from "../pages/cartPage";

type MyPOMFixtures = {
  loginPageF: loginPage;
  homePageF: homePage;
  cartPageF: cartPage;
};

export const test = baseTest.extend<MyPOMFixtures>({
  loginPageF: async ({ page }, use) => {
    const loginPageF = new loginPage(page);
    await use(loginPageF);
  },
  homePageF: async ({ page }, use) => {
    const homePageF = new homePage(page);
    await use(homePageF);
  },
  cartPageF: async ({ page }, use) => {
    const cartPageF = new cartPage(page);
    await use(cartPageF);
  },
});
