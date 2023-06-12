const app = require('./src/app');
const notif = require('./app.feedback');

test("TEST 1 (3)", () => {
  const valor = app.cuadrado(3);
  if (valor !== 9 ) {
    notif.enviarNotificacionAutor('Test 1 Fallido: La operacion no produjo el resultado esperado');
  };
  expect(valor).toBe(9);
});