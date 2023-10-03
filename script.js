/**Primero
 Utilizar el método filter, crear un arreglo con n cantidad de números, 
 vamos a filtrar los números mayores o iguales a 5, ese nuevo arreglo lo 
 vamos a imprimir con el foreach*/

const numbers = [100, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arreglo = numbers.filter((number) => number >= 5);

arreglo.forEach((element) => {
  console.log(element);
});

/**Segundo
 * Solo manzana y fresa con slice
 */
//                  0         1           2           3       4
const frutas = ["naranja", "platano", "manzana", "fresa", "kiwi"];
const frutasRecortadas = frutas.slice(2, 4);
console.log(frutasRecortadas);

/**Tercero
 * Tener un arreglo de n cantidad de numeros
 * Aplicar el método .map, por cada elemento que este dentro del arreglo
 * Le sumamos el número 10 y lo imprimimos dentro del mismo map
 * En la impresión va a imprimir el indice con el número con los 10
 */

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerosSumados = numeros2.map(function (x, indice) {
  val = x + 10;
  console.log(indice + " : " + val);
});

/**Cuarto
 *Concat
 */

const letras1 = ["H", "I", "J"];
const letras2 = ["K", "L", "M"];
const abecedario = letras1.concat(letras2);
console.log(abecedario);

/**Arrelgo .includes */

const country = ["México", "USA", "Francia"];
console.log(country.includes("Francia"));
