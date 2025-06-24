import { test } from "@playwright/test";

test("Test Practice 1", async ({ page }) => {
  console.log("Starting test 1");
  await page.goto("https://www.google.com");
  console.log(await page.title());
  console.log("Ending test 1");
});

test("Test Practice 2", async ({ page }) => {
  console.log("Starting test 2");
  await page.goto("https://www.google.com");
  console.log(await page.title());
  console.log("Ending test 2");
});

test("Test Practice 3", async ({ page }) => {
  console.log("Starting test 3");
  await page.goto("https://www.google.com");
  console.log(await page.title());
  console.log("Ending test 3");
});

test.describe("Practice of Describe", async () => {
  test.afterAll("Practice of BeforeAll", async ({ browser }) => {
    console.log("Executing After All block");
  });

  test("Test Practice 4", async ({ page }) => {
    console.log("Starting test 4");
    await page.goto("https://www.google.com");
    console.log(await page.title());
    console.log("Ending test 4");
  });

  test("Test Practice 5", async ({ page }) => {
    console.log("Starting test 5");
    await page.goto("https://www.google.com");
    console.log(await page.title());
    console.log("Ending test 5");
  });

  test("Test Practice 6", async ({ page }) => {
    console.log("Starting test 6");
    await page.goto("https://www.google.com");
    console.log(await page.title());
    console.log("Ending test 6");
  });
});

test("Test Practice 7", async ({ page }) => {
  console.log("Starting test 7");
  await page.goto("https://www.google.com");
  console.log(await page.title());
  console.log("Ending test 7");
});
