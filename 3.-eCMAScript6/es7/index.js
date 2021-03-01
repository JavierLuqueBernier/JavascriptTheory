/**
 * Includes facilita localizar si se encuentra un elemento dentro de un array, pues antes habia que hacerlo con index of
 */
let numbers = [1, 2, 3, 7, 8];


if (numbers.includes(7)) {
  console.log(`Sí se encuentra el valor 7`);
} else {
  console.log(`No se encuentra el valor 7`);
}

// Tambien podemos empezar a buscar a partir de un elemento concreto. Ej:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

if (arr.includes(/*(element, index)*/ 6, 3)) {
    console.log(`Sí se encuentra el valor 6`)
} else {
    console.log(`No se encuentra el valor 6`)
}

// element será el elemento que andamos buscando e index será desde el punto en el que queremos empezar a buscar(recordar que en los arrays se empieza a contar en 0
// asique si ponemos que queremos empezar a contar desde el 3 en realidad estamos diciendo que se empezara a contar desde la 4 posición, por lo que si  con ese mismo
// array [1, 2, 3, 4, ,5 ,6 ,7 ,8 ,9] ponemos arr.includes(3, 3) , dará negativo por que el 3 se encuentra en la posicion 3 y no en la 4).
// es decir, que si queremos buscar el número 2 empezando a contar desde el elemento en la tercera posición, el resultado del console.log será que no se encuentra


/**
 * Pow (elevar a la potencia) se hace con los simbolos **
 */
let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);