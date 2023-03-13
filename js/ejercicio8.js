/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……*/
let NumeroRepeticion = prompt("Introduce numero de repeticiones");
if (Number(NumeroRepeticion) == NumeroRepeticion) {
    if (NumeroRepeticion > 0 && NumeroRepeticion <= 50) {
        let r,i;
        for (i = 0; i <=NumeroRepeticion; i++) {
            for (r = 1; r <= i; r++) {
                document.write(r);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
}
