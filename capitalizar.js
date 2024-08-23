const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalizarFrase(frase) {
    return frase.split(" ").map(palabra => palabra[0].toUpperCase() + palabra.slice(1)).join(" ");
}

rl.question("Ingresa una frase: ", function(frase) {
    console.log(capitalizarFrase(frase));
    rl.close();
});
