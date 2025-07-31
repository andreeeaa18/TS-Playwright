import { test } from "@playwright/test";
// import CryptoJS from "crypto-js";
import { encryptData, decryptData } from "../util/encrypt-decrypt-util";

test("Encrypt Decrypt sensitive data in Playwright", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  //   const encryptedUsername = CryptoJS.AES.encrypt(
  //     "standard_user",
  //     "ssKey"
  //   ).toString();
  //   console.log(encryptedUsername);

  //   const encryptedPassword = CryptoJS.AES.encrypt(
  //     "secret_sauce",
  //     "ssKey"
  //   ).toString();
  //   console.log(encryptedPassword);

  //   const encryptedUserN = encryptData("standard_user");
  //   const encryptedPass = encryptData("secret_sauce");
  //   console.log(encryptedUserN);

  const encryptUS = "U2FsdGVkX18QN5twJrJJGtfguh1MAu2E5e+b3lD5jkI=";
  const encryptPS = "U2FsdGVkX1+ZLsjkxLMxcCYoMC8qtrapBfTTLxKEhDk=";
  //   const secretKey: any = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

  const decryptedUserN = decryptData(encryptUS);
  const decryptedPass = decryptData(encryptPS);

  //   //   const decryptedUS = CryptoJS.AES.decrypt(encryptUS, secretKey).toString(
  //   //     CryptoJS.enc.Utf8
  //   //   );
  //   //   console.log(decryptedUS);

  //   //   const decryptedPS = CryptoJS.AES.decrypt(encryptPS, secretKey).toString(
  //   //     CryptoJS.enc.Utf8
  //   //   );
  console.log(decryptedUserN + " - " + decryptedPass);

  await page.getByTestId("username").fill(decryptedUserN);
  await page.getByTestId("password").fill(decryptedPass);
  await page.getByTestId("login-button").click();
});

test("Encrypt Decrypt 2", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  const encUname: any = process.env.encryptUS;
  const decryptedUserN = decryptData(encUname);

  const encPwd: any = process.env.encryptPS;
  const decryptedPass = decryptData(encPwd);

  await page.getByTestId("username").fill(decryptedUserN);
  await page.getByTestId("password").fill(decryptedPass);
  await page.getByTestId("login-button").click();
});
