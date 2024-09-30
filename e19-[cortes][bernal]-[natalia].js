/**
 * Escribe un script que calcule el factorial de un número introducido por el usuario. El factorial de un número n es el producto de todos los números enteros desde 1 hasta n.
 */

let number = prompt("> Write a number").trim();

try {
  if (number !== "" && number !== null && !isNaN(number)) {
    let suma = 1;
    parseInt(number)
    for (let i = 1; i<=number; i++){
        suma *= i;
    }
    alert(suma)
  } else {
    throw new Error("Invalid entry. It's not a number.");
  }
} catch (error) {
  alert(error.message);
  console.error("Error: ", error);
}