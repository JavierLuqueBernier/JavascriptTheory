var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

const esAlta = ({ altura }) => altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

//Podriamos hacer un ciclo For para saber cuantos libros tienen entre todos:
/*

var acum = 0;
for (var i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros
}

console.log(`En total todos tienen ${ acum } libros` )
*/

//otra forma de saber cuantos libros hay en total es con el método Reducer, al que se le pasan 2 parametros: el acumulador (acum) y cada uno de los elementos (persona)
const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${ totalDeLibros } libros` )

// y para resumirlo, podría quedar de la siguiente manera

const reducer = (acum, persona) => acum + persona.cantidadDeLibros