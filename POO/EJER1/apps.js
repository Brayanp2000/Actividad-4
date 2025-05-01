function calcularCuadrados() {
  // Variable para almacenar el numero ingresado por el usuario
  let numero;
  alert("cálculo de cuadrados");
  
  // Ciclo que se ejecuta hasta que se ingrese un número negativo
  do {
      numero = prompt("Ingrese un numero (ingres un negativo para terminar):");

      numero = parseFloat(numero);
      
      if (isNaN(numero)) {
          alert("Debe ingresar un numero válido.");
      } 
      else if (numero >= 0) {
          let cuadrado = numero * numero;
          //RESULTADO
          alert("El cuadrado de " + numero + " es: " + cuadrado);
      }
      else {
          alert("Ha ingresado un numero negativo, ADIOSSS");
      }
      
  } while (numero >= 0);
}
calcularCuadrados();