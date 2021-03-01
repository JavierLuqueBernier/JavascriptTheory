/**
 * Así sería como se declaraba una nueva función antes de ES6
 */
function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
  
  // Ahora con ES6 se realiza así

  function newFunctionES6(name = 'Oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
  }

  // Y por supuesto, para llamar a la función hay dos formas, dejando que tome los atributos por defecto o dandole unos nuevos nosotros
  
  newFunctionES6();
  newFunctionES6('Ricardo', 23, 'Colombia');
  
  /**
   * Concatenation - Template Literals. Antes se hacía así:
   */
  let hello = 'Hello';
  let world = 'World';
  let epicPhrase = hello + ' ' + world + '!';
  
  // Ahora con ES6 se hace con comillas francesas
  let epicPhraseES6 = `${hello} ${world}!`;
  
  console.log(epicPhrase);
  console.log(epicPhraseES6);
  