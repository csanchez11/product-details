// Use supertest library to test HTTP requests/responses
const request = require("supertest");
// app has to be exported in ../server/app.js then imported here for testing
const app = require("../server/app.js");

describe('Testing the Test', () => {

  test('Test the Test', () => {
    let timesTwo = (num) => {
      return num * 2;
    }
    let result = timesTwo(8)
    expect(result).toEqual(16);
  });
});

describe("GET /products/:id ", () => {

  test("should respond with a status code of 200", async () => {

    const response = await request(app).get("/products/2");
    expect(response.statusCode).toBe(200);
  });

  test("should respond with a product object with correct properties", async () => {

    const response = await request(app).get("/products/2");
    expect(response.body.id).toEqual(2);
    expect(response.body.designed_for).toEqual("Running");
  });
});
