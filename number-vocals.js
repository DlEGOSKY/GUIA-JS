const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocales(palabra) {
    return (palabra.match(/[aeiouAEIOU]/g) || []).length;
}

rl.question("Ingresa una palabra: ", function(palabra) {
    console.log("La palabra tiene " + contarVocales(palabra) + " vocales.");
    rl.close();
});
