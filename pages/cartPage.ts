import { Locator, Page } from "@playwright/test";

export class cartPage {
  readonly page: Page;
  readonly backpackItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backpackItem = page.getByTestId("item-4-title-link");
  }
}
