const app = require('./dist/app');
const notif = require('./app.feedback');
import square from ('./dist/app');

test("TEST 1 (3)", () => {
  expect(square(3)).toBe(9);
});
