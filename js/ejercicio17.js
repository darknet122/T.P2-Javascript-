//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
let vocales = ["a", "e", "i", "o", "u"];
    let texto = prompt("Escriba un texto");
    let TextoMinusculas = texto.toLowerCase();
    let posicion = 0;
    let detener = false;
    for (let i = 0; i < TextoMinusculas.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (vocales[j] == TextoMinusculas.charAt(i)) {
                posicion = i;
                detener = true;
                break;
            }
        }
        if (detener) {
            break;
        }
    }
    document.write("La primera vocal del texto que escribio está en la posición " + posicion);