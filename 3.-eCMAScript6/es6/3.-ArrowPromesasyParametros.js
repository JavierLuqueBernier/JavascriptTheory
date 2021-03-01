/**
 * Parameters in Objects
 */
let name = 'Oscar';
let age = 32;

// es5
obj = { name: name, age: age };

// es6
objES6 = { name, age };

/**
 * Arrow Functions
 */
const names = [
  { name: 'Yesica', age: 27 },
  { name: 'Oscar', age: 32 }
];

// es5
let listOfNames = names.map(function(item) {
  console.log(item.name);
});

// Defino el nombre de mi variable en la que voy a trabajar (listOfNames), ahora, utilizo el método .map. Por si no se recuerda, .map me permite crear
// un nuevo array dependiendo de la funcion a la que se llame. Generalmente, se usa con funciones anonimas

// es6
let listOfNamesES6 = names.map(item => console.log(item.name));

/**
 * Promises
 */
const helloPromise = () => {
  return new Promise((resolve, reject) => { // resolve y reject se utilizan en la declaracion de la funcion
    if (x) {
      resolve('Hey!');
    } else {
      reject('Upss!');
    }
  });
};

helloPromise()                              // then y catch se utilizan en la llamada a dicha funcion
  .then(response => console.log(response))
  .then(() => console.log('Hello World!'))
  .catch(error => console.log(error));