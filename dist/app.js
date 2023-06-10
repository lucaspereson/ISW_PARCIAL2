let square = function(number) {
  return number * number;
};

const resultado1Element = document.getElementById("resultado1");
resultado1Element.innerHTML = '3^2 = ' + square(3);

const resultado2Element = document.getElementById("resultado2");
resultado2Element.innerHTML = '8^2 = ' + square(8);

module.exports = {
    square
}
