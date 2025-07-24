import { test, expect } from "@playwright/test";

let tokenValue;
test.beforeAll("Basic Auth", async ({ request }) => {
  const postReq = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "admin", password: "password123" },
    }
  );

  tokenValue = (await postReq.json()).token;
  console.log(await postReq.json());
});

test("Authetication of Put Call", async ({ request }) => {
  const putRq = await request.put(
    "https://restful-booker.herokuapp.com/booking/3",
    {
      headers: {
        Cookie: `token=${tokenValue}`,
      },
      data: {
        firstname: "Milly",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
    }
  );
  expect(putRq.status()).toBe(200);
});

test.skip("API Testing Authentication with API Key", async ({ request }) => {
  const putReq = await request.put(
    "https://restful-booker.herokuapp.com/booking/3",
    {
      headers: {
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
      },
      data: {
        firstname: "Milly",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
    }
  );

  expect(putReq.status()).toBe(200);
});

test("Authetication of Delete Call", async ({ request }) => {
  const deleteReq = await request.delete(
    "https://restful-booker.herokuapp.com/booking/3",
    {
      headers: {
        Cookie: `token=${tokenValue}`,
      },
    }
  );
  expect(deleteReq.status()).toBe(201);
});
