/**
 * Crea un bucle que pida al usuario su edad 5 veces y calcule cuántas veces el usuario ha introducido un valor mayor o igual a 18.
 */

try {
    var counter = 0;
    for (let i = 0; i < 5; i++) {
      let number = prompt("> Write a number").trim();

    if (number !== "" && number !== null && !isNaN(number)) {
      let parsedNumber = parseInt(number);
      if (parsedNumber >= 18) {
        counter++;
      }
      alert(`${counter} times is of age`);
    } else {
      throw new Error("Invalid entry. It's not a number.");
    }
  }
} catch (error) {
  alert(error.message);
  console.error("Error: ", error);
}