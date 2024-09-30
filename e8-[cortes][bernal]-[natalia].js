/**
 * Escribe un script que pida al usuario su edad y determine si es mayor o menor de edad. Usa una estructura if...else.
 * Añade una segunda condición que verifique si el usuario tiene entre 18 y 25 años, mostrando un mensaje específico en ese caso.
 */
let age = prompt("> Write your age").trim();

try {
    if (age !== "" && age !== null && !isNaN(age)) {
        let parsedage = parseFloat(age);
        if (parsedage>18 && parsedage<25){
            result = "Estás entre 18 y 25"
        } else if(parsedage >= 18){
            result = "Eres mayor de edad"
        } else {
            result = "Eres menor"
        }
        alert(result);
    } else {
        throw new Error("Entrada inválida. No es un número.");
    }
} catch (error) {
    alert(error.message); // Se muestra el error en el mensaje de alerta
    console.error("Error: ", error); // Error detallado en la consola
}