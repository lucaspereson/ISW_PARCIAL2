const app = require('../src/app');

test("TEST 1 (3)", () => {
  const valor = app.cuadrado(3);
  expect(valor).toBe(9);
});