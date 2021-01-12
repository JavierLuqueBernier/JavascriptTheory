//              Clase 6 = OBJETOS  

/* Los objetos reunen ciertas caracteristicas en comun (atributos) de un objeto de la vida real*/
var jose = { // Los objetos se definen delimitados mediante llaves {}
    nombre: 'Jose',
    apellido: 'calvano', //clave: Valor
    edad: 28
}

function imprimirMayusculas(nombre) {
 nombre = nombre.toUpperCase()
 console.log(nombre)
}
imprimirMayusculas(jose.nombre)
/*Escribir el nombre de un objeto separado por un punto del nombre de un atributo, nos permite acceder al valor de dicho atributo para ese objeto.*/
//Mejorando un poco 

function imprimirMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}
imprimirMayusculas(jose); // Imprimira 'Jose' porque es el atributo de la clave "nombre" dentro del objeto (var jose).

// o lo que es lo mismo:

function imprimirMayusculas2(persona) {
    console.log(persona.nombre.toUpperCase())
}
imprimirMayusculas2(jose);



//Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. 
//Esto se consigue encerrando el nombre del atributo entre llaves { }.

function imprimirMayusculas3({ nombre }) {
    console.log(nombre.toUpperCase())
}
imprimirMayusculas3(persona)
//-------------------------------------------------------------------------------------------------------------------------------------//

function escribirNombreEnMayusculas ( persona ) {
    // var nombre = persona.nombre.toUpperCase();              Esta linea y la inmediatamente inferior son iguales, hacen lo mismo.
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

function imprimirNombreyEdad({ nombre, edad }) {
    console.log(`Hola, mi nombre es ${nombre.toUpperCase} y mi edad es ${edad}`);
}

//---------------------------------------------------------------------------------------------------------------------------------------//


//Hay funciones que pueden cambiar el estado o datos originales del objeto, como por ejemplo la siguiente función:

function cumpleanos(persona) {
    persona.edad += 1;
}

cumpleanos(jose); // var jose = { nombre: 'Jose', apellido: 'calvano', edad: (la última edad + 1: 29, 30, 31, ... ) }

// Sin embargo, si no queremos modificar el objeto inicial, lo cual es recomendable para Redux, 
// lo recomendable es crear otro objeto con el valor alterado de la siguiente forma:

function cumpleanos(persona) {
    return {
        ...persona, // esta es la linea que hace que se copien todos los atributos del objeto "jose" y la siguiente linea es la que sobreescribe.
        edad: persona.edad + 1
    }
}

var personaMasVieja = cumpleanos(jose);

// De esta forma seguimos teniendo el objeto "jose" con valor de edad 28 y un nuevo objeto llamado "personaMasVieja" con valor de edad 29 y todo lo demás igual