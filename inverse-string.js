const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa una cadena: ", function(cadena) {
    console.log(cadena.split("").reverse().join(""));
    rl.close();
});
