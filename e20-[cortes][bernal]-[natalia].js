/**
 * Escribe un script que determine si una cadena de texto es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
 * Ejemplo de palíndromo: 
 * "La ruta nos aporto otro paso natural".
 */

// alert((s=>{s=s.toLowerCase().replace(/[\W_]/g,'');return s===s.split('').reverse().join('');})(prompt())?"Es un palíndromo.":"No es un palíndromo.");

const esPalindromo = c => (c = c.toLowerCase().replace(/\s+/g, '')) && c === [...c].reverse().join('');
console.log(esPalindromo("La ruta nos aporto otro paso natural"))