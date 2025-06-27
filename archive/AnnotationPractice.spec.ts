import { test } from "@playwright/test";

test.describe("Practice of describe", async () => {
  test("Test Practice 1", async ({ page }) => {
    console.log("Starting test 1");
    console.log("Ending test 1");
  });

  test("Test Practice 2", async ({ page }) => {
    console.log("Starting test 2");
    console.log("Ending test 2");
  });

  test("Test Practice 3", async ({ page }) => {
    test.slow();
    console.log("Starting test 3");
    console.log("Ending test 3");
  });
});

test.fixme("Test Practice 4", async ({ page }) => {
  console.log("Starting test 4");
  console.log("Ending test 4");
});

test("Test Practice 5", async ({ page, browserName }) => {
  test.fail(browserName === "firefox");
  console.log("Starting test 5");
  console.log("Ending test 5");
});
