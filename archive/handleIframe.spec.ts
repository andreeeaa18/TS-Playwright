import { test, expect } from "@playwright/test";

test("Handle Iframe with Name", async ({ page }) => {
  await page.goto(
    "https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form"
  );
  const frame1 = page.frame("iframeResult");
  await frame1?.locator("#fname").fill("Test Automate");
});

test("Handle Iframe with URL", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_iframe.asp");
  const frame2 = page.frame({
    url: "https://www.w3schools.com/html/default.asp",
  });
  await frame2
    ?.getByRole("button", { name: "Button to open search field" })
    .click();
  await frame2
    ?.getByRole("textbox", { name: "Search field" })
    .fill("Test Code Automate");
});

test("Handle Iframe with frameLocator Method", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_iframe.asp");
  const frame3 = page.frameLocator("[title='W3Schools HTML Tutorial']");

  await frame3
    ?.getByRole("button", { name: "Button to open search field" })
    .click();
  await frame3
    ?.getByRole("textbox", { name: "Search field" })
    .fill("Test Code Automate");
});
