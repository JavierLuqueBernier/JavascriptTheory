let sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
}

let alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

let martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

let dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

let vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

let paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

let personas = [ sacha, alan, martin, dario, vicky, paula]

const esAlta = ({ altura }) => altura > 1.8;

var personasAltas = personas.filter(esAlta);

/* const pasarAlturaCms = altura => {
  persona.altura = persona.altura * 100;
  return persona;
}
  El problema de esta funcion es que modificamos el valor original de los objetos, por lo que podemos hacerlo de la siguiente manera para que eso no ocurra: */

const pasarAlturaCms = persona => {
  return {
    ...persona,
    altura: persona.altura * 100 // con el return, nos está devolviendo otro objeto cambiando lo que queriamos cambiar pero sin modificar el anterior
  }
}

let personasCms = personas.map(pasarAlturaCms)