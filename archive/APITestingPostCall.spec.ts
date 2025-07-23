import { test, expect } from "@playwright/test";

test("API Testing Post Call 1", async ({ request }) => {
  const resp1 = await request.post("/booking", {
    data: {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "Breakfast",
    },
  });
  const jsonResp = await resp1.json();
  console.log(jsonResp);
  //   expect(resp1.status()).toBe(200);
  //   expect(resp1.statusText()).toBe("OK");
  //   expect(resp1.ok()).toBeTruthy();
  expect(jsonResp.booking).toMatchObject({
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: "2018-01-01", checkout: "2019-01-01" },
    additionalneeds: "Breakfast",
  });
  expect(jsonResp.booking.additionalneeds).toEqual("Breakfast");
});
