/**
 * Escribe un script que pida al usuario un número entero de varios dígitos y sume todos los dígitos del número. Muestra el resultado en un alert().
 */
let number = prompt("> Write a number").trim();

try {
  if (number !== "" && number !== null && !isNaN(number)) {
    let digits = number.split("");

    let sum = digits.reduce((counter, digit) => counter + parseInt(digit), 0);
    alert(sum)
  } else {
    throw new Error("Invalid entry. It's not a number.");
  }
} catch (error) {
  alert(error.message);
  console.error("Error: ", error);
}
