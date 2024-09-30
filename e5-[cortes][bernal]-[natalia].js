/**
 * Declara dos variables numéricas. Usa operadores de comparación (<, >, ==, !=) para comparar los valores y muestra los resultados en consola.
 * Utiliza operadores lógicos (&&, ||, !) para combinar condiciones y muestra los resultados en consola.
 */

let numberOne = 1;
let numberTwo = 2;

console.log(numberOne>numberTwo)
console.log(numberOne<numberTwo)
console.log(numberOne==numberTwo)
console.log(numberOne!=numberTwo)

if (!isNaN(numberOne) && !isNaN(numberTwo)){
    console.log(numberOne, numberTwo)
}