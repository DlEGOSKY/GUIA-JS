function convertirMayusculas(cadena) {
    return cadena.toUpperCase();
}

let cadena = prompt("Ingresa una cadena:");
let mayusculas = convertirMayusculas(cadena);
console.log(mayusculas);
