const app = require('./src/app');
const notif = require('./app.feedback');

test("TEST 2 (8)", () => {
  const valor = app.cuadrado(8);
  if (valor !== 64 ) {
    const subj = 'Notificación de error en pruebas unitarias';
    const error = 'Test 2 Fallido: La operacion no produjo el resultado esperado';
    const txt = `Se encontró un error en las pruebas unitarias:\n\n${error}`;
    notif.enviarNotificacionAutor(subj, txt);
  };
  expect(valor).toBe(64);
});