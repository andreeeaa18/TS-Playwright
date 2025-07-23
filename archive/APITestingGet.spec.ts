import { test, request, expect } from "@playwright/test";

let reqContext2;
test.beforeAll("Before all tests", async () => {
  reqContext2 = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: { Accept: "application/json" },
  });
});

test("API Testing Get Practice 1", async ({ request }) => {
  const resp1 = await request.get(
    "https://restful-booker.herokuapp.com/booking",
    { headers: { Accept: "application/json" } }
  );
  console.log(await resp1.json());
});

test("API Testing Get Practice 2", async () => {
  const reqContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: { Accept: "application/json" },
  });
  const resp1 = await reqContext.get("/booking");
  console.log(await resp1.json());
});

test("API Testing Get Practice 3", async () => {
  const resp1 = await reqContext2.get("/booking");
  console.log(await resp1.json());
});

test("API Testing Get Practice 4", async ({ request }) => {
  const resp1 = await request.get("/booking");
  console.log(await resp1.json());
});

test("API Testing Get Practice 5", async ({ request }) => {
  const resp1 = await request.get("/booking/2402");
  console.log(await resp1.json());
});

test("API Testing Get Practice 6", async ({ request }) => {
  const resp1 = await request.get("/booking?firstname=John&lastname=Smith");
  console.log(await resp1.json());
});

test("API Testing Get Practice 7", async ({ request }) => {
  const resp1 = await request.get("/booking", {
    params: { firstname: "John", lastname: "Smith" },
  });
  console.log(await resp1.json());
});

test.skip("API Testing Get Practice 8", async ({ request }) => {
  const resp1 = await request.get("/booking/61");
  const bookingData = await resp1.json();
  console.log(bookingData);
  //   expect(resp1.status()).toBe(200);
  //   expect(resp1.ok()).toBeTruthy();
  expect(bookingData).toMatchObject({
    firstname: "Jake",
    lastname: "Smith",
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: "2018-01-01", checkout: "2019-01-01" },
    additionalneeds: "Breakfast",
  });

  const jsonResponse = await resp1.json();
  expect(jsonResponse.firstname).toEqual("Jake");
});

// test("API with UI verification", async ({ request }) => {
//   const newResp = await request.get("https://api.demoblaze.com/entries");
//   const logNewResp = await newResp.json();
//   console.log(logNewResp.Items[0].title);
// });
