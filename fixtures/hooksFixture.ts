import { test as baseTest } from "@playwright/test";

type myHooksFixture = {
  loginLogoutFixture: any;
};

export const test = baseTest.extend<myHooksFixture>({
  loginLogoutFixture: async ({ page }, use) => {
    const loginLogoutFixture = undefined;
    //login
    await page.goto("https://www.saucedemo.com");
    await page.getByTestId("username").fill("standard_user");
    await page.getByTestId("password").fill("secret_sauce");
    await page.getByTestId("login-button").click();

    await use(loginLogoutFixture);
    //logout
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.getByTestId("logout-sidebar-link").click();
  },
});

export { expect } from "@playwright/test";
