function contarPalabras(frase) {
    let palabras = frase.split(" ");
    return palabras.length;
}

let frase = prompt("Ingresa una frase:");
let cantidadPalabras = contarPalabras(frase);
console.log("La frase tiene " + cantidadPalabras + " palabras.");
