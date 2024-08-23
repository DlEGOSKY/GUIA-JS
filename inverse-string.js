function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

let cadena = prompt("Ingresa una cadena:");
let invertida = invertirCadena(cadena);
console.log(invertida);
