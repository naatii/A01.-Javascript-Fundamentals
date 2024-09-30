/**
 * Escribe un script que pida al usuario un número y utilice el operador ternario para determinar si el número es positivo, negativo o cero. Muestra el resultado en un alert().
 */

let number = prompt("> Write a number").trim();

try {
    if (number !== "" && number !== null && !isNaN(number)) {
        let parsedNumber = parseFloat(number);
        let result = parsedNumber > 0 
                        ? `El número ${parsedNumber} es positivo` 
                        : parsedNumber < 0 
                            ? `El número ${parsedNumber} es negativo` 
                            : `El número es 0`;
        alert(result);
    } else {
        throw new Error("Entrada inválida. No es un número.");
    }
} catch (error) {
    alert(error.message); // Se muestra el error en el mensaje de alerta
    console.error("Error: ", error); // Error detallado en la consola
}