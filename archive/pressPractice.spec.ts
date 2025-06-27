import { test } from "@playwright/test";

test("Press Practice", async ({ page }) => {
  //   await page.goto("https://ultimateqa.com/filling-out-forms/");
  //   await page.locator("#et_pb_contact_name_0").fill("TestCodeAutomate");
  //   await page
  //     .locator("#et_pb_contact_message_0")
  //     .fill("Learn for a brighter tomorrow");

  //   await page.goto(
  //     "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable"
  //   );
  //   await page
  //     .locator('iframe[name="iframeResult"]')
  //     .contentFrame()
  //     .getByText("This is a paragraph. It is")
  //     .fill("Testing ContentEditable");

  await page.goto("https://www.google.com");
  await page
    .getByRole("combobox", { name: "Caută" })
    .pressSequentially("Playwright", { delay: 100 });
  //   await page
  //     .getByRole("combobox", { name: "Caută" })
  //     .press("ArrowDown+ArrowDown+ArrowDown");
  //   await page.getByRole("combobox", { name: "Caută" }).press("Enter");

  await page.getByRole("combobox", { name: "Caută" }).press("Backspace");
});
