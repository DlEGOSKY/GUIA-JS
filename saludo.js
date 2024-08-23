const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa tu nombre: ", function(nombre) {
    rl.question("Ingresa tu apellido: ", function(apellido) {
        console.log("Hola, " + nombre + " " + apellido + "!");
        rl.close();
    });
});
