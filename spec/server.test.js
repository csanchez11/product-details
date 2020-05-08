// Use supertest library to test HTTP requests/responses
const request = require("supertest");
// app has to be exported in ../server/index.js then imported here for testing
const app = require("../server");

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
  test("It should respond with a product object", async () => {

    const response = await request(app).get("/products/2");
    expect(response.body.id).toEqual(2);
    expect(response.body.designed_for).toEqual("Running");
    expect(response.statusCode).toBe(200);
  });
});
