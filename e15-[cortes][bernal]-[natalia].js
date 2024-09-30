/**
 * Completa las condiciones de los if en el siguiente script para que los mensajes de los alert() se muestren de forma correcta:
 */

var number1 = 5;
var number2 = 8;

if(number1>number2){
    alert("number 1 is greater than number 2")
}

if (number2>=0){
    alert("number 2 it's positive")
}

if (number1<0 || number1 !== 0){
    alert("number1 it's negatice or it's different from 0");
}
number1++
if (number2>=number1){
    alert("increase 1 unit number 1 won't had become greater or equal than number 2")
}