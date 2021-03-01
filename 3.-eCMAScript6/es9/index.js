/**
 * Operador de reposo
 */
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
  };
  
  let { name, ...all } = obj;
  console.log( name, all);  // el resultado del console.log sería:  Oscar { age: 32, country: 'MX'}
 
  
  let { country, ...all } = obj;
  console.log(all); // resultado sería: { name: 'Oscar', age: 32 }
  
  /**
   * Porpagation Properties
   */
  const obj = {
    name: 'Oscar',
    age: 32
  };
  
  const obj1 = {
    ...obj,         // al utilizar los puntos suspensivos, enlazamos los elementos del prmier objeto con los elementos del segundo
    country: 'MX'
  };
  console.log( obj1 );
  
  /**
   * Promise Finally
   */
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true                                         //|
        ? resolve('Hello World!')                  //|>> Todo esto es en realidad un ternario, pero con una forma rara. El condicional es el true
        : reject(new Error('Test Error'));         //|
    });                                            //|
  };
  
  helloWorld()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('finalizó'));       //| Basicamente el Promise Finally para lo que sirve es para añadir que se ejecute otra funcion, se cumpla o no la promesa
  
  /**
   * Regex
   */
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2018-04-28');
  const year = match[1];        // con ese match lo que hacemos es referencia al primer grupo
  const month = match[2];
  const day = match[3];
  console.log(year, month, day);