import { test as baseTest } from "@playwright/test";

type MyFixture = {
  loginData: any;
  testData: any;
};

export const test = baseTest.extend<MyFixture>({
  loginData: { username: "Admin", password: "admin123" },
  testData: {
    fName: "Sam",
    lName: "Warn",
    mName: "James",
    email: "sam@gmail.com",
  },
});
