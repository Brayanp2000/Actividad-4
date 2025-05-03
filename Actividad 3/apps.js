function productoImpares() {
    alert("Vamos a calcular el producto de los 10 primeros números impares");

    let resultado = 1;
    let cantidad = 0;
    let num = 1;
    let texto = "Números impares: ";
// Bucle hasta encontrar los 10 primeros impares
// Si el número es impar (resto de dividir por 2 es 1)
// Multiplicamos por el número impar
    while (cantidad < 10) {
        if (num % 2 === 1) {
            resultado *= num;
            texto += num;

            cantidad++;

            if (cantidad < 10) {
                texto += ", ";
            }
        }
 // Pasamos al siguiente número
        num++;
    }
// Mostramos los números impares encontrados
// Mostramos el resultado final
    alert(texto);
    alert("El producto de los 10 primeros números impares es: " + resultado);
    alert("ADIOSS")
}

productoImpares();
