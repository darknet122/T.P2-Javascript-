//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
let nombre1 = prompt("Ingrese el primer nombre");
let edad1 = Number(prompt("ingrese una edad"));

let nombre2 = prompt("Ingrese un segundo nombre");
let edad2 = Number(prompt("ingrese una edad"));

let nombre3 = prompt("Ingrese un ultimo tercer nombre");
let edad3 = Number(prompt("ingrese una edad"));

let maximo = Math.max(edad1, edad2, edad3);

    if (maximo == edad1) {
        document.write("El mayor es " + nombre1);
    }
    if (maximo == edad2) {
        document.write("El mayor es " + nombre2);
    }
    if (maximo == edad3) {
        document.write("El mayor es " + nombre3);
    } 
    