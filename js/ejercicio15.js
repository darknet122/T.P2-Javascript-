//15- Realiza un script que cuente el número de vocales que tiene un texto.
let texto = prompt("Escriba un texto:");
let numtext = texto.length;   
texto = texto.toUpperCase();  
let vocal;
let contador = 0;
let i;
for (i = 0; i < numtext; i++) {
    vocal = texto.charAt(i);   
    if ((vocal == "A") || (vocal == "E") || (vocal == "I") || (vocal == "O") || (vocal == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");