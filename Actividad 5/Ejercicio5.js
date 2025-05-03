
let numeros = [];
let sumaPositivos = 0;
let sumaNegativos = 0;
let cuentaPositivos = 0;
let cuentaNegativos = 0;
let cuentaCeros = 0;

for (let i = 0; i < 10; i++) {
    let input = prompt(`Vamos a mostrar la media de los números positivos, la media de
los números negativos y la cantidad de ceros. entonces Ingresa el número ${i + 1}:`);
    let numero = parseFloat(input);

    if (isNaN(numero)) {
        alert("Dato inválido. Se contará como cero.");
        numero = 0;
    }

    numeros.push(numero);

    if (numero > 0) {
        sumaPositivos += numero;
        cuentaPositivos++;
    } else if (numero < 0) {
        sumaNegativos += numero;
        cuentaNegativos++;
    } else {
        cuentaCeros++;
    }
}

let mediaPositivos = cuentaPositivos > 0 ? sumaPositivos / cuentaPositivos : 0;
let mediaNegativos = cuentaNegativos > 0 ? sumaNegativos / cuentaNegativos : 0;

console.log("Media de números positivos:", mediaPositivos);
console.log("Media de números negativos:", mediaNegativos);
console.log("Cantidad de ceros:", cuentaCeros);

alert(
    "Resultados:\n" +
    "Media de números positivos: " + mediaPositivos.toFixed(2) + "\n" +
    "Media de números negativos: " + mediaNegativos.toFixed(2) + "\n" +
    "Cantidad de ceros: " + cuentaCeros
);


