let square = function(number) {
  return number * number;
};

function guardarNumero() {
  var numero = document.getElementById("numeroInput").value;
  document.getElementById("resultado").innerHTML = "Número al cuadrado: " + square(numero);
};




module.exports = {
    square,
    guardarNumero
}
