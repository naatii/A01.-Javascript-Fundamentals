/**
 * Escribe un bucle while que pida al usuario un número entero y siga pidiendo números hasta que el usuario introduzca un número negativo.
 */

let number = prompt("> Write a number").trim();

try {
    if (number !== "" && number !== null && !isNaN(number)) {
        while(number>=0){
            number = prompt("> Write a number").trim();
        }
        alert("El número es negativo")
    } else {
        throw new Error("Entrada inválida. No es un número.");
    }
} catch (error) {
    alert(error.message); // Se muestra el error en el mensaje de alerta
    console.error("Error: ", error); // Error detallado en la consola
}