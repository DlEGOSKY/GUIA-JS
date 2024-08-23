function capitalizarFrase(frase) {
    return frase.split(" ").map(palabra => palabra[0].toUpperCase() + palabra.slice(1)).join(" ");
}

let frase = prompt("Ingresa una frase:");
console.log(capitalizarFrase(frase));
