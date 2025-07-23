import { test, expect } from "@playwright/test";
import APIJson from "../test-data/apidata.json";

test("API Testing Pass Req body from JSON for Post call", async ({
  request,
}) => {
  const reqPost = await request.post("/booking", {
    data: APIJson,
  });

  const jsonResp = await reqPost.json();
  expect(jsonResp.booking).toMatchObject(APIJson);

  expect(jsonResp.booking.additionalneeds).toEqual(
    APIJson.postcalldata.additionalneeds
  );
});

test("API Testing Pass Req payload from JSON for Put call", async ({
  request,
}) => {
  const putReq = await request.put(
    "https://restful-booker.herokuapp.com/booking/1",
    {
      data: APIJson.putcalldata,
    }
  );

  const jsonPut = await putReq.json();
  expect(jsonPut).toMatchObject(APIJson.putcalldata);

  expect(jsonPut.firstname).toEqual(APIJson.putcalldata.firstname);
});
