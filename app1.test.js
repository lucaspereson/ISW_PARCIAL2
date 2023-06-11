const cuadrado = require('./dist/app');
const notif = require('./app.feedback');

test("TEST 1 (3)", () => {
  // if (app.square(3) !== 9 ) {
   // notif.enviarNotificacionAutor('Test 1 Fallido: La operacion no produjo el resultado esperado');
  //};
  expect(cuadrado(3)).toBe(9);
});
