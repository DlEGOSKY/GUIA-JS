const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa una frase: ", function(frase) {
    console.log("La frase tiene " + frase.split(" ").length + " palabras.");
    rl.close();
});
