import { test, expect } from "@playwright/test";

test("API Testing Headers Verification", async ({ request }) => {
  const getReq = await request.get("/booking/1");
  const headersValue = getReq.headers();
  console.log(headersValue);

  expect(headersValue.server).toEqual("Heroku");
  expect(headersValue["x-powered-by"]).toEqual("Express");

  const headerArrayValue = getReq.headersArray();
  console.log(headerArrayValue);
  expect(headerArrayValue.length).toBe(10);

  headerArrayValue.forEach((item) => {
    console.log(item.name + " :: " + item.value);
  });
});
