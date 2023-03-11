//10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
const filas = prompt('ingrese un numero de filas');
const columnas = prompt('ingrese un numero de columnas');
document.write(`<table>
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
    </tbody>
</table>`)