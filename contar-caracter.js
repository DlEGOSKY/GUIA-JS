function contarCaracteres(cadena) {
    return cadena.length;
}

let cadena = prompt("Ingresa una cadena:");
let cantidad = contarCaracteres(cadena);
console.log("La cadena tiene " + cantidad + " caracteres.");
