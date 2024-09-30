/**
 * Declara dos variables numéricas. Usa los operadores aritméticos básicos (+, -, *, /) y muestra los resultados en consola.
 * Utiliza un operador de incremento y uno de decremento en las variables, mostrando el resultado en consola.

 */

let numberOne = 10;
let numberTwo = 40;

console.log(`number 1 = ${numberOne} and number 2 = ${numberTwo}`);

if(!isNaN(numberOne) && !isNaN(numberTwo)){
    console.log("addition ");
    console.log(numberOne+numberTwo);
    console.log("subtraction ");
    console.log(numberOne-numberTwo);
    console.log("multiplication ");
    console.log(numberOne*numberTwo);
    console.log("division");
    console.log(numberOne/numberTwo);
    console.log("increase ");
    console.log(++numberOne);
    console.log("decrease");
    console.log(--numberTwo);
}