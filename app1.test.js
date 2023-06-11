const app = require('./src/app');
const notif = require('./app.feedback');

test("TEST 1 (3)", () => {
  if (app.cuadrado(3) !== 9 ) {
    notif.enviarNotificacionAutor('Test 1 Fallido: La operacion no produjo el resultado esperado');
  };
  const valor = app.cuadrado(3);
  expect(valor).toBe(9);
});