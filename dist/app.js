// console.log("Hola mundo");
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



let square = function(number) {
    return number * 3;
  }

module.exports = {
    square
}
 