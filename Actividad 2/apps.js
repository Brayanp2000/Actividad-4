function adivinaNumero() {
    alert("Adivinar el número");
//Variables
    let secreto = prompt("Jugador 1: Escribe un número secreto:");
    secreto = parseInt(secreto);
//y si?
    if (isNaN(secreto)) {
        alert("Eso no es un número válido. Refresca la página para intentarlo de nuevo.");
        return;
    }

    alert("Jugador 2: Ahora intenta adivinar el número");

    let intento;
    let intentos = 0;
// Bucle hasta que adivine el número
    do {
        intento = prompt("Tu intento:");
        intento = parseInt(intento);

        if (isNaN(intento)) {
            alert("Eso no es un número válido.");
            continue;
        }
 // Aumentamos el contador de intentos
        intentos++;

        if (intento < secreto) {
            alert("El número secreto es MAYOR.");
        } else if (intento > secreto) {
            alert("El número secreto es MENOR.");
        } else {
            alert("Correcto, Adivinaste el número " + secreto + " en " + intentos + " intentos.");
        }

    } while (intento !== secreto);
}

adivinaNumero();
