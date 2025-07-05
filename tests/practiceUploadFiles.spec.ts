import { test } from "@playwright/test";

test("Practice Upload Files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  //   await page.locator("#filesToUpload").setInputFiles("to-upload/file1.txt");

  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "to-upload/file1.txt",
      "to-upload/file2.docx",
      "to-upload/file3.docx",
    ]);
  await page.locator("#filesToUpload").setInputFiles([]); // remove all the uploaded files
});

test("Practice Upload Files 2", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  const fileChooser = page.waitForEvent("filechooser");
  await page.locator("#drag-drop-upload").click();

  const file = await fileChooser;
  //   await file.setFiles("to-upload/file3.docx");
  await file.setFiles([
    "to-upload/file1.txt",
    "to-upload/file2.docx",
    "to-upload/file3.docx",
  ]);
});
