import { test, expect } from "@playwright/test";

test("API Testing Put Call 1", async ({ request }) => {
  const resp1 = await request.put("/booking/1", {
    headers: {
      Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
    },
    data: {
      firstname: "Jamila",
      lastname: "Bobby",
      totalprice: 211,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-09-01",
        checkout: "2019-10-01",
      },
      additionalneeds: "Lunch",
    },
  });

  const jsonResp = await resp1.json();
  console.log(jsonResp);

  expect(resp1.status()).toBe(200);
  expect(resp1.statusText()).toBe("OK");
  expect(resp1.ok()).toBeTruthy();
  expect(jsonResp).toMatchObject({
    firstname: "Jamila",
    lastname: "Bobby",
    totalprice: 211,
    depositpaid: true,
    bookingdates: { checkin: "2018-09-01", checkout: "2019-10-01" },
    additionalneeds: "Lunch",
  });

  expect(jsonResp.additionalneeds).toEqual("Lunch");

  const resp2 = await request.get(
    "https://restful-booker.herokuapp.com/booking/1"
  );
  console.log(await resp2.json());

  expect(await resp2.json()).toMatchObject({
    firstname: "Jamila",
    lastname: "Bobby",
    totalprice: 211,
    depositpaid: true,
    bookingdates: { checkin: "2018-09-01", checkout: "2019-10-01" },
    additionalneeds: "Lunch",
  });
});
