import { test } from "@playwright/test";

test.describe("Describe block 1", { tag: "@sanity" }, async () => {
  test("Tag Practice 1 @UI", async ({}) => {
    console.log("Practice test 1");
  });

  test("Tag Practice 2 @API", async ({}) => {
    console.log("Practice test 2");
  });

  test("Tag Practice 3 @UI @IOU", async ({}) => {
    console.log("Practice test 3");
  });
});

test("Tag Practice 4", { tag: ["@UI", "@IOU"] }, async ({}) => {
  console.log("Practice test 4");
});

test("Tag Practice 5", { tag: "@API" }, async ({}) => {
  console.log("Practice test 5");
});

test("Tag Practice 6", { tag: "@API" }, async ({}) => {
  console.log("Practice test 6");
});
