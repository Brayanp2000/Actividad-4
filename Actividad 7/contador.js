let numero = '';
let formato = '';

// Función para mostrar el contador con sustitución de '3' por 'E' //
function mostrarContador() {
  for (let i = 0; i <= 99999; i++) {
    numero = i.toString().padStart(5, '0');
    numero = numero.replace(/3/g, 'E');
    formato = numero.split('').join('-');
    console.log(formato);
    window.alert(formato);
  }
}

// Ejecutar función
mostrarContador();
