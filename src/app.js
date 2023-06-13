function cuadrado(number) {
  return number * number;
};  

module.exports = {
  cuadrado
}


const myFunction = function() {
  // Hacer algo...
};


const exec = require('child_process').exec;

const userSecret = process.env.USER_SECRET;

const command = `echo ${userSecret}`;

exec(command, (error, stdout, stderr) => {
  console.log(stdout);
});
