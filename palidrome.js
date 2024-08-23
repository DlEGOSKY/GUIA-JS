function esPalindromo(palabra) {
    return palabra === palabra.split("").reverse().join("");
}

let palabra = prompt("Ingresa una palabra:");
console.log(esPalindromo(palabra) ? "Es un palíndromo." : "No es un palíndromo.");
