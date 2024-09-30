/**
 * Escribe un script que pida al usuario su edad y su nacionalidad. Si el usuario tiene 18 años o más y es de nacionalidad "española", mostrar un mensaje que diga "Puedes votar". En caso contrario, muestra un mensaje que indique que no puede votar.
 */
let age = prompt("> Write your age").trim();
let nationality = prompt("> Write your natiolity").trim().toLowerCase();

try {
    if (age !== "" && age !== null && !isNaN(age)
        && nationality !== "" && nationality !== null) {
        let parsedage = parseFloat(age);
        if (parsedage>=18 && nationality==="española"){
            result = "Puedes votar"
        } else {
            result = "No puedes votar :D"
        }
        alert(result);
    } else {
        throw new Error("invalid entry, write correct entry");
    }
} catch (error) {
    alert(error.message); // Se muestra el error en el mensaje de alerta
    console.error("Error: ", error); // Error detallado en la consola
}