//Object entries devuelve los valores de una matriz.

const data ={
    front:'Alej',
    back: 'Rel',
    desing: 'Ana',
};

//Transformar este objeto en una matriz. 
const entries =Object.entries(data);
console.log(entries);   /* el resultado del console.log sería    => [
                                                                        [ 'front', 'Alej'],
                                                                        [ 'back', 'Rel'],
                                                                        [ 'desing', 'Ana']
                                                                    ] */

//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length); // 3



//Objetc Values: Me devuelve los valores de un objeto a un array 


const data= {
    front:'Alej',
    back: 'Rel',
    desing: 'Ana',
}

const values = Object.values(data);
console.log(values); // esto devuelve [ 'Alej', 'Rel', 'Ana']  ya que devuelve el valor de los objetos dentro del array

// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi'


//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data= {
    front:'Alej', // Puede existir
    back: 'Rel'
}
