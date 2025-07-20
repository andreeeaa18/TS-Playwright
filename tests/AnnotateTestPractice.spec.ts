import { test, expect } from "@playwright/test";

test(
  "Annotate Test Practice 1",
  {
    annotation: [
      {
        type: "Google Title Verification",
        description: "We are going to verify google title",
      },
      {
        type: "Jira Story",
        description:
          "https://wishinfinite1.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-1",
      },
    ],
    tag: "@UI",
  },
  async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
  }
);

test(
  "Annotate Test Practice 2",
  {
    annotation: {
      type: "Jira Story",
      description:
        "https://wishinfinite1.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-1",
    },
  },
  async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
  }
);

test.describe(
  "Describe block",
  {
    annotation: {
      type: "Jira Story",
      description:
        "https://wishinfinite1.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-1",
    },
  },
  async () => {
    test("Test Practice 1", async ({}) => {
      console.log("Test Practice 1");
    });

    test("Test Practice 2", async ({}) => {
      console.log("Test Practice 2");
    });

    test("Test Practice 3", async ({}) => {
      console.log("Test Practice 3");
    });
  }
);
