const app = require('./src/app');
const notif = require('./app.feedback');

test("TEST 2 (8)", () => {
  const valor = app.cuadrado(8);
  if (valor !== 64 ) {
    notif.enviarNotificacionAutor('Test 2 Fallido: La operacion no produjo el resultado esperado');
  };
  expect(valor).toBe(64);
});