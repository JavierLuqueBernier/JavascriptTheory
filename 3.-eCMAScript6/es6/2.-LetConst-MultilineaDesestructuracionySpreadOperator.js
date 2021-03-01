//Forma normal separaciones de línea.

//Antes para realizar multilíneas se usaba  backslash (alt+92) + n + "" continuar una línea
let Frase ="KANSClnclnsnspan pscapo apso  \n" //Multilíneas
+ "ljsndljnvsjd"

//Con los Template literals `` se puede sencillamente realizar un enter para pasar de línea.
let Frase_es6 = `Lknlasknlncs
dksvñsnkvlksnnldkvsnd`;

console.log(Frase);
console.log(Frase_es6);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Destructuración de elementos o SPREAD OPERATOR!
// Es un operador que simplifica la recogida de valores en una estructura de datos. Convierte un array o un objeto en el conjunto de valores que contiene.

//Antes los objetos podía ser creados así:

let person ={
    name:'Alejandro',
    age: 32,
    country:'ES'
};

//Si queríamos llamar lo que componía ese objeto utilizabamos:
console.log(person.name, person.age, person.country);

//Ahora con la destrucción de elementos, sucede una especie de resumen, donde se extrae un factor común del nombre del objeto

let {name, age, country} = person;

console.log(name, age, country);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Operador de prolongación: Permite expandir varios elementos. Tenemos varios elementos en arreglos que queremos unir en un solo elemento para presentarlos.

let conjunto1= ['a','b','c'];
let conjunto2= ['x','y','z'];

let conjunto_union=['m','n',...conjunto1,...conjunto2] // el operador de prolongacion son los "..."delante del elemento que queremos añadir.
console.log(conjunto_union);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Asignaciones mediante let se pueden inicilizar variables  cuyo scope está solo en el bloque de código en el que está llamada, en otras palabras,
// solo puede existir las variables let dentro de las llaves en que se llaman. Var se seguirá usando para variables globales y locales.
 

{
    var globalVar= "Global Var";
}

{
    let globalLet= "Global Let"; // aparece así en oscurito porque al ser una variable SOLO LOCAL y no ser llamada de nuevo dentro de su scope, Emet te avisa de que no
                                 // ha sido llamda de nuevo correctamente
    console.log(/* globalLet */); // Sin embargo si el console.log esta dentro de las llaves o el bloque de código, el console.log se ejecutará con normalidad
}

console.log(globalVar);
console.log(globalLet); // Al ejecutar esta arroja error al estar fuera del scope donde fue declarada.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Const, nos permitirá establecer una variable como una constante, donde el valor declarado no podrá cambiar.

const a = "Soy constante";
a = "No soy constante" ; // Al ejecutar arroja error porque no puede cambiarse una constante luego de declararse.

console.log(a);
