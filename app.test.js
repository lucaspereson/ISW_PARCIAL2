function enviarNotificacionAutor(error) {

  // Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  // Configura los detalles del servicio de correo electrónico que deseas utilizar
  service: 'Gmail',
  auth: {
    user: 'lucaspereson17@gmail.com',
    pass: '17pereson22'
  }
});

  // Configura los detalles del correo electrónico
  const mailOptions = {
    from: 'lucaspereson17@gmail.com',
    to: 'lucaspereson.alt@gmail.com',
    subject: 'Notificación de error en pruebas unitarias',
    text: `Se encontró un error en las pruebas unitarias:\n\n${error}`
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('Error al enviar el correo electrónico:', error);
    } else {
      console.log('Correo electrónico enviado:', info.response);
    }
  });
};

const app = require('./dist/app');

test("TEST", () => {
  if ((app.square(8) !== 64) && (app.square(3) !== 9) ) {
    // Envía una notificación por correo electrónico al autor cuando falle el test
    enviarNotificacionAutor('Test Fallido: La operacion no produjo el resultado esperado');
  }
  expect(app.square(8)).toBe(64);
  expect(app.square(3)).toBe(9);
});