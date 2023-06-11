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

  transporter.sendMail(mailOptions, (error, info) => { });
};

module.exports = {
  enviarNotificacionAutor
}