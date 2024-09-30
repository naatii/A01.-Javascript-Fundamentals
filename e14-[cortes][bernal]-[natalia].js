/**
 * Escribe un script en el que el usuario introduzca un número entero y muestre por pantalla una cadena de texto que indique si el número es par o impar.
 */

let number = prompt("> Write a number").trim();

try {
    if (number !== "" && number !== null && !isNaN(number)) {
        let parsedNumber = parseInt(number);
        if(parsedNumber%2===0){
            alert(`number: ${parsedNumber} it's even`)
        } else {
            alert(`number: ${parsedNumber} it's odd`)
        }
    } else {
        throw new Error("Invalid entry. It's not a number.");
    }
} catch (error) {
    alert(error.message); // Se muestra el error en el mensaje de alerta
    console.error("Error: ", error); // Error detallado en la consola
}