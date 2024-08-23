const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa una frase: ", function(frase) {
    rl.question("Ingresa la palabra que quieres reemplazar: ", function(palabra) {
        rl.question("Ingresa la nueva palabra: ", function(nuevaPalabra) {
            console.log(frase.replace(palabra, nuevaPalabra));
            rl.close();
        });
    });
});
