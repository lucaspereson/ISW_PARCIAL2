const app = require('./src/app');
const notif = require('./app.feedback');

test("TEST 1 (3)", () => {
  const valor = app.cuadrado(3);
  if (valor !== 9 ) {
    const subj = 'Notificación de error en pruebas unitarias';
    const error = 'Test 1 Fallido: La operacion no produjo el resultado esperado';
    const txt = `Se encontró un error en las pruebas unitarias:\n\n${error}`;
    notif.enviarNotificacionAutor(subj, txt);
  };
  expect(valor).toBe(9);
});