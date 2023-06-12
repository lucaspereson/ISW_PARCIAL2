function cuadrado(number) {
  return number * h;
};

module.exports = {
  cuadrado
}

const { JSDOM } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('./src/index.html', 'utf-8');
const dom = new JSDOM(html);
const document = dom.window.document;

// Aquí puedes utilizar el objeto `document` para manipular el DOM
const resultadoElemento1 = document.getElementById("resultado1");
resultadoElemento1.innerHTML = '3^2 = ' + cuadrado(3);
const resultadoElemento2 = document.getElementById("resultado2");
resultadoElemento2.innerHTML = '8^2 = ' + cuadrado(8);



