import { test, expect } from "@playwright/test";

test("Visual Testing Practice", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/tables");
  //   await expect(page).toHaveScreenshot();
  //   await expect(page).toHaveScreenshot("Visual-Testing.png");
  //   await expect(page).toHaveScreenshot([
  //     "ChildFolder1/ChildFolder2",
  //     "VisualTestingWithChildFolder1.png",
  //   ]);
  //   await expect(page).toHaveScreenshot([
  //     "ChildFolder3",
  //     "abc",
  //     "VisualTestingWithChildFolder2 .png",
  //   ]);
  //   await expect(page).toHaveScreenshot("FullnmaePractice.png", {
  //     fullPage: true,
  //   });

  //   await expect(page).toHaveScreenshot("MaxDiffPixelPractice.png", {
  //     maxDiffPixels: 50000,
  //   });
  //   await expect(page).toHaveScreenshot("MaxDiffPixelRatioPractice.png", {
  //     maxDiffPixelRatio: 0.6,
  //   });

  //   await expect(page).toHaveScreenshot("MaskPage1.png", {
  //     mask: [page.locator("//table[@id='table1']//tbody//tr//td[4]")],
  //   });
  //   await expect(page).toHaveScreenshot("MultiMask.png", {
  //     mask: [
  //       page.locator("//table[@id='table1']//tbody//tr//td[4]"),
  //       page.locator("#table2"),
  //     ],
  //   });

  //   await expect(page.locator("#table1")).toHaveScreenshot(
  //     "TableVerificaion2.png",
  //     { mask: [page.locator("//table[@id='table1']//tbody//tr//td[4]")] }
  //   );
});

test("Visual Testing - Iframe hiding Practice", async ({ page }) => {
  await page.goto("https://demoqa.com/forms");
  await expect(page).toHaveScreenshot("iframeHiding.png", {
    stylePath: "to-upload/screenshot.css",
  });
});

test("Non Image Screenshot", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  //   expect(
  //     page
  //       .getByRole("heading", { name: "Playwright enables reliable" })
  //       .textContent()
  //   ).toMatchSnapshot("HeadingSnapshot.txt");
});
