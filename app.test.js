const app = require('./dist/app');

test("TEST", () => {
  expect(app.square(8)).toBe(64);
});