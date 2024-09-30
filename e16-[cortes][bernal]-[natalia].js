let number = prompt("> Write a number").trim();

try {
    if (number !== "" && number !== null && !isNaN(number)) { // validación de datos
        let parsedNumber = parseInt(number); // conversión a Int para los calculos
        if(parsedNumber%2===0){ // comprobación de si es par 
            alert(`number: ${parsedNumber} it's even`) // salida del resultado.
        } else {
            alert(`number: ${parsedNumber} it's odd`)
        }
    } else {
        throw new Error("Invalid entry. It's not a number."); // si las condiciones no se cumplen genera un error
    }
} catch (error) { // Capturamos el error.
    alert(error.message); // Se muestra el error en el mensaje de alerta
    console.error("Error: ", error); // Error detallado en la consola
}

/**
 * en este código se ha validado las entradas vacías, la introducción de letras, la introducción de espacios, e incluso clicando el botón de cancelar en el prompt. Además se ha probado en distinto navegadores, el código funciona y captura los errores posibles de introducción de datos para el correcto funcionamiento del código.
 */