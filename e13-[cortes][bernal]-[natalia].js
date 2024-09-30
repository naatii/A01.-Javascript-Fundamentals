/**
 * Escribe un script que pida al usuario un número y verifique si la entrada es realmente un número. Si no lo es, muestra un mensaje de error y vuelve a pedir la entrada. Repite hasta que el usuario introduzca un número válido.
 */

let number = prompt("> Write a number").trim();

try {
    if (number !== "" && number !== null && !isNaN(number)) {
        let parsedNumber = parseFloat(number);
        alert(`number: ${parsedNumber} it's a number`)
    } else {
        throw new Error("Invalid entry. It's not a number.");
    }
} catch (error) {
    alert(error.message); // Se muestra el error en el mensaje de alerta
    console.error("Error: ", error); // Error detallado en la consola
}