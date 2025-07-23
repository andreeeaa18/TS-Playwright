import { test, expect } from "@playwright/test";
import { log } from "node:console";

test("API Testing Delete Call", async ({ request }) => {
  const deleteRq = await request.delete("booking/2");
  expect(deleteRq.status()).toBe(201);

  const textDeleteRq = await deleteRq.text();
  expect(textDeleteRq).toEqual("Created");
  console.log(textDeleteRq);

  const getRq = await request.get(
    "https://restful-booker.herokuapp.com/booking/2"
  );
  console.log(getRq.status());

  expect(getRq.status()).toBe(404);
});
