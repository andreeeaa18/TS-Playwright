import { Locator, Page } from "@playwright/test";

export class homePage {
  readonly page: Page;
  readonly homePageTitle: Locator;
  readonly backpackAddToCart: Locator;
  readonly backpackRemove: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homePageTitle = page.getByText("Swag Labs");
    this.backpackAddToCart = page.locator(
      "[data-test='add-to-cart-sauce-labs-backpack']"
    );
    this.backpackRemove = page.locator(
      "[data-test='remove-sauce-labs-backpack']"
    );
    this.cartIcon = page.locator("[data-test='shopping-cart-link']");
  }

  async addToCart() {
    await this.backpackAddToCart.click();
  }

  async gotToCart() {
    await this.cartIcon.click();
  }
}
