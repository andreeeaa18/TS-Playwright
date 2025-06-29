import { test } from "../fixtures/myCustomFixture";

test("Pactice Test 1", async ({ fixture1, workerFixture1 }) => {
  console.log(fixture1);
  console.log(workerFixture1);
});

test("Pactice Test 2", async ({ fixture1 }) => {
  console.log(fixture1);
});
