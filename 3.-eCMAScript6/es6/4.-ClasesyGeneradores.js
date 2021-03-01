/**
 * Classes
 */

// Las clases nos facilitan la vida como programadores y en el caso en particular de JS, nos permite trabajar con programación orientada a objetos (POO)

class Calculator { // Introducimos la palabra Class con lo que indicamos que estamos definiendo una clase
    constructor() { // Las clases necesitan un constructor, en este asignaremos las variables DENTRO DEL SCOPE GLOBAL
      this.valueA = 0;
      this.valueB = 0;
    }
  
    sum(valueA, valueB) {  // sum es un método, al cual le pasaremos los dos valores de A y B
      this.valueA = valueA; // con esto se asigna las variables que construimos previamente a los valores que recibe
      this.valueB = valueB;
      return this.valueA + this.valueB;
    }
  }
  
  const calc = new Calculator();
  console.log(calc.sum(2, 2));
  
/**
 * Generators
 */
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }

  if (true) {
    yield 'World!';
  }
}

//console.log(helloWorld.next().value);  esto no se puede hacer porque estamos encadenando una función a otra (el método next es una funcion propia de JS)

const generatorHello = helloWorld(); // debemos crear una variable generadora para poder utilizar el método next
console.log(generatorHello.next().value); // el .next para lo que sirve es para decirle a la funcion que aunque se da el primer caso del if, también debe de 
                                          // reproducirse el segundo if.
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);