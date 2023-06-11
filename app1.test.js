const app = require('./dist/app');
const notif = require('./app.feedback');

test("TEST 1 (3)", () => {
  expect(app.square(3)).toBe(9);
});
