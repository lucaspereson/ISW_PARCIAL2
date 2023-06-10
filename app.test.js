const nodemailer = require('nodemailer');

// Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { 
    user: 'lucaspereson17@gmail.com',
    pass: '17pereson22'
  }
});
 
// Función para enviar un correo electrónico al autor
function enviarNotificacionAutor(error) {
  const mailOptions =  {
    from: 'lucaspereson17@gmail.com',
    to: 'lucaspereson.alt@gmail.com',
    subject: 'Notificación de error en pruebas unitarias',
    text: `Se encontró un error en las pruebas unitarias:\n\n${error}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
    } else {
      console.log('Correo electrónico enviado:', info.response);
    }
  });
};

const app = require('./dist/app');

test("TEST 1 (3)", () => {
  if (app.square(8) !== 64 || app.square(3) !== 9 ) {
    // Envía una notificación por correo electrónico al autor cuando falle el test
    enviarNotificacionAutor('Test Fallido: La operacion no produjo el resultado esperado');
  };
  expect(app.square(3)).toBe(9);
});

test("TEST 2 (8)", () => {
  if (app.square(8) !== 64 || app.square(3) !== 9 ) {
    // Envía una notificación por correo electrónico al autor cuando falle el test
    enviarNotificacionAutor('Test Fallido: La operacion no produjo el resultado esperado');
  };
  expect(app.square(8)).toBe(64);
});