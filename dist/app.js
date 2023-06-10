let square = function(number) {
  return number * number;
};

module.exports = {
    square
}

const { JSDOM } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('./dist/index.html', 'utf-8');
const dom = new JSDOM(html);
const document = dom.window.document;

// Aquí puedes utilizar el objeto `document` para manipular el DOM
const resultadoElemento1 = document.getElementById("resultado1");
resultadoElemento1.textContent = square(3);



