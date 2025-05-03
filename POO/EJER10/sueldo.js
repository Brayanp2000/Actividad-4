const prompt = require('prompt-sync')();

let cantidadSueldos = 0;
let sueldos = [];
let sueldoMaximo = 0;

function leerSueldos() {
  cantidadSueldos = parseInt(prompt("Ingrese la cantidad de sueldos (N): "));
  for (let i = 0; i < cantidadSueldos; i++) {
    const sueldo = parseFloat(prompt(`Ingrese el sueldo ${i + 1}: `));
    sueldos.push(sueldo);
  }
  sueldoMaximo = Math.max(...sueldos);
  return sueldoMaximo;
}

const maximo = leerSueldos();
console.log(`El sueldo máximo es: $${maximo.toFixed(2)}`);
