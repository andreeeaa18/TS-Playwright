import { test as baseTest } from "@playwright/test";

type myFixtures = {
  fixture1: any;
};

type myWorkerFixtures = {
  workerFixture1: any;
};

export const test = baseTest.extend<myFixtures, myWorkerFixtures>({
  fixture1: async ({}, use) => {
    const fixture1 = "I am Fixture 1";
    console.log("Before part of Fixture 1");
    await use(fixture1);
    console.log("After part of Fixture 1");
  },

  workerFixture1: [
    async ({}, use) => {
      const workerFixture1 = "I am workerFixture 1";
      console.log("Before part of workerFixture 1");
      await use(workerFixture1);
      console.log("After part of workerFixture 1");
    },
    { scope: "worker" },
  ],
});
