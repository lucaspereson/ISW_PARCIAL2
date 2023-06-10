const nodemailer = require('nodemailer');

// Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { 
    user: 'lucaspereson17@gmail.com',
    pass: 'trdxjoahmlrwzqxi'

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
  expect(app.square(3)).toBe(9);
  if (app.square(3) !== 9 ) {
    enviarNotificacionAutor('Test 1 Fallido: La operacion no produjo el resultado esperado');
  };
  
});

test("TEST 2 (8)", () => {
  expect(app.square(8)).toBe(64);
  if (app.square(8) !== 64) {
    enviarNotificacionAutor('Test 2 Fallido: La operacion no produjo el resultado esperado');
  };
  
});