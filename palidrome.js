const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esPalindromo(palabra) {
    return palabra === palabra.split("").reverse().join("");
}

rl.question("Ingresa una palabra: ", function(palabra) {
    console.log(esPalindromo(palabra) ? "Es un palíndromo." : "No es un palíndromo.");
    rl.close();
});
