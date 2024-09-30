/**
 * El mensaje que se muestra al usuario se almacene en una variable llamada mensaje y aparezca en un pop-up.
 * El mensaje mostrado incluya:
 * Un salto de línea.
 * Comillas simples y comillas dobles.

 */
let message = prompt("> Escribe un mensaje").trim()

try{
    if(message !== "" && message !== null){
        confirm(`Holi, este es tu mensaje con comillas dobles: \"${message}\"
            este es tu mensaje con comillas simples: \'${message}\'`)
    } else{
        throw new Error("Escriba un mensaje válido");
    }
}catch (error){
    alert(error.message)
    console.error(error)
}