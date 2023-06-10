const app = require('./dist/app');
const notif = require('./app.feedback');

test("TEST 1 ", () => {
  if (app.saludar() !== "Hola, mundo" ) {
    notif.enviarNotificacionAutor('Test 1 Fallido: La operacion no produjo el resultado esperado');
  };
  expect(app.saludar()).toBe("Hola, mundo");
});
