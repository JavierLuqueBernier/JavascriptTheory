var persona = {
    nombre: 'Jose',
    apellido: 'calvano', //clave: Valor
    edad: 28
}

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

//Otra forma de escribir la funcion esMayorDeEdad es con una funcion anonina, es decir:

//    const esMayorDeEdad = function (persona) {
//        return persona.edad >= MAYORIA_DE_EDAD;
//    }


// o con una arrow function:

//    const esMayorDeEdad = (persona) => {
//        return persona.edad >= MAYORIA_DE_EDAD;
//    }

// Si hay un solo parametro en la funcion podemos ahorrarnos los parentesis es decir:

//    const esMayorDeEdad = persona => {
//        return persona.edad >= MAYORIA_DE_EDAD;
//    }

//Si la funcion solo returna algo entonces podemos ahorrarnos el Return y las llaves por lo que se vería así:

//    const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

// Así mismo, podemos desestructurar como vimos anteriormente por lo que la función se quedaría así:

//    const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;


function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}