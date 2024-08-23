function contarVocales(palabra) {
    return (palabra.match(/[aeiouAEIOU]/g) || []).length;
}

let palabra = prompt("Ingresa una palabra:");
console.log("La palabra tiene " + contarVocales(palabra) + " vocales.");
