const app = require('./dist/app');
const notif = require('./app.feedback');

test("TEST 2 (8)", () => {
  if (app.square(8) !== 64 ) {
    notif.enviarNotificacionAutor('Test 2 Fallido: La operacion no produjo el resultado esperado');
  };
  const valor = app.cuadrado(8);
  expect(valor).toBe(64);
});