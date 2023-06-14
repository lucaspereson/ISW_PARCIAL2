function cuadrado(number) {
  return number * number;
} 

let x =1;
let y =x;
let z =y;
x=z;
y=z;

module.exports = {
  cuadrado
}