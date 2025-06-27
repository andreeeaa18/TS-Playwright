import { Locator, Page } from "@playwright/test";

export class loginPage {
  readonly page: Page;
  readonly usernameTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameTextBox = page.locator("id=user-name");
    this.passwordTextBox = page.locator("id=password");
    this.loginButton = page.locator("id=login-button");
  }

  async openApp() {
    await this.page.goto("https://saucedemo.com/");
  }

  async login(usernameVal: string, passwordVal: string) {
    await this.usernameTextBox.fill(usernameVal);
    await this.passwordTextBox.fill(passwordVal);
    await this.loginButton.click();
  }
}
