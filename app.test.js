const app = require('./dist/app');

test("TEST 1", () => {
  expect(app.square(8)).toBe(64);
});