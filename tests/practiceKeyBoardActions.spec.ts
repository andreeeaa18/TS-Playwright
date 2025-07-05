import { test } from "@playwright/test";

test("Practice Keyboard Actions", async ({ page }) => {
  await page.goto(
    "https://testpages.eviltester.com/styled/basic-html-form-test.html"
  );
  const commentArea = page.locator("[name='comments']");
  await commentArea.press("Meta+A");
  await commentArea.press("Backspace");
  await commentArea.press("a+B+c");
  await commentArea.press("Meta+A+X");

  const username = page.locator("[name='username']");
  await username.press("Meta+V");
  await username.press("ArrowLeft+ArrowLeft+ArrowLeft");
  await username.press("z");

  await page.keyboard.press("PageDown");
  await page.keyboard.press("PageUp");
});
