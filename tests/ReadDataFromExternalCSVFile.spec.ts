import { test } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";

const records = parse(fs.readFileSync("test-data/testdata.csv"), {
  columns: true,
  skip_empty_lines: true,
  trim: true,
  //delimiter: ";",
});

records.forEach((el) => {
  test(`Get data from CSV - ${el.id}`, async ({ page }) => {
    console.log(el.id);
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByPlaceholder("First Name").fill(el.firstName);
    await page.getByPlaceholder("Last Name").fill(el.lastName);
  });
});
