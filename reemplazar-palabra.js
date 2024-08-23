function reemplazarPalabra(frase, palabra, nuevaPalabra) {
    return frase.replace(palabra, nuevaPalabra);
}

let frase = prompt("Ingresa una frase:");
let palabra = prompt("Ingresa la palabra que quieres reemplazar:");
let nuevaPalabra = prompt("Ingresa la nueva palabra:");
let nuevaFrase = reemplazarPalabra(frase, palabra, nuevaPalabra);
console.log(nuevaFrase);
