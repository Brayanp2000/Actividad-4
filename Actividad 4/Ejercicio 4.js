
let num=parseFloat(prompt("Ingrese un numero para calcular su factorial"))
let factorial= 1;

if(isNaN(num) || num < 0) {
  console,log("Por favor ingresa un número entero positivo.");
} else {
  for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("El factorial de " + num + " es: " + factorial);
}









