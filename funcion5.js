function contarVocales(cadena) {

    let contador = 0;
    const vocales = "aeiouAEIOU";
    for (let char of cadena) {
    if (vocales.includes(char)) {
    contador++;
    }
    }
    return contador;
    }
    console.log(contarVocales("Hola Mira lo MEJOR DEL Mundo")); // Salida: 4