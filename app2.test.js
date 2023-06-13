const app = require('./src/app');

test("TEST 2 (8)", () => {
  const valor = app.cuadrado(8);
  expect(valor).toBe(64);
});