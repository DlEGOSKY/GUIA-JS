const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa una cadena: ", function(cadena) {
    rl.question("Ingresa la posición de inicio de la subcadena: ", function(inicio) {
        rl.question("Ingresa la posición final de la subcadena: ", function(fin) {
            console.log(cadena.substring(parseInt(inicio), parseInt(fin)));
            rl.close();
        });
    });
});
