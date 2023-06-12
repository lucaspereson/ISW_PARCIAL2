const { execSync } = require('child_process');
const nodemailer = require('nodemailer');

function obtenerEmailAutorCommit() {
  try {
    const email = execSync('git log --format="%ae" -n 1').toString().trim();
    return email;
  } catch (error) {
    console.error('Error al obtener el email del autor del commit:', error);
    return null;
  }
}

// Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { 
    user: 'lucaspereson17@gmail.com',
    pass: 'trdxjoahmlrwzqxi'
  }
});
 
// Función para enviar un correo electrónico al autor
function enviarNotificacionAutor(subj, txt) {
  const mailOptions =  {
    from: 'lucaspereson17@gmail.com',
    to: obtenerEmailAutorCommit(),
    subject: subj,
    text: txt
  };

  transporter.sendMail(mailOptions, (error, info) => { });
};

module.exports = {
  enviarNotificacionAutor
}