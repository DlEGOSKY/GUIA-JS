function extraerSubcadena(cadena, inicio, fin) {
    return cadena.substring(inicio, fin);
}

let cadena = prompt("Ingresa una cadena:");
let inicio = parseInt(prompt("Ingresa la posición de inicio de la subcadena:"));
let fin = parseInt(prompt("Ingresa la posición final de la subcadena:"));
let subcadena = extraerSubcadena(cadena, inicio, fin);
console.log(subcadena);
