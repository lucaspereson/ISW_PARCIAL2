const { square } = require('./app');

test("TEST 1:", () => {
  expect(square(8)).toBe(64);
});