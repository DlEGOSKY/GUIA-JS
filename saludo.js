function saludar(nombre, apellido) {
    return "Hola, " + nombre + " " + apellido + "!";
}

let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");
let saludo = saludar(nombre, apellido);
console.log(saludo);
