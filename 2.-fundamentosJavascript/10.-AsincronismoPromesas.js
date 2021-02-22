const API_URL = 'https://swapi.dev/api/'
const PEOPLE_API = 'people/:id/';

var obtenerPersonaje = function(id) {

    return new Promise(function (resolve, reject) {               // Para trabajar con promesas lo primero es que hay que crear una promesa que invoca una funcion
        fetch(`${API_URL}`+`${PEOPLE_API.replace(':id', id )}`)   // Al igual que antes, indicamos que datos queremos traer con Fetch()
        .then(data => resolve(data.json()))                       // Indicamos cuales deben de ser los procedimientos a seguir en caso de exito (resolve)
        .catch(() => reject(id))                                  // o de fracaso (catch)
    })
}

const error = (id) => console.log(`Error al obtener personaje ${id}`)  // esta es la accion que se realiza en caso de que ocurra un fallo en la linea 17

obtenerPersonaje(1)
.then(personaje => console.log(`El personaje es ${personaje.name}`)) // aquí, personaje es igual a data de la linea 8
.catch(error)

// El problema en este punto es que de nuevo necesitariamos anidar unas promesas dentro de otras para que los resultados llegaran en el orden que necesitamos, por lo que ahora
// necesitamos desarrollar lo que se conoce como Promesas Encadenadas, para no llegar a producir otro callback-Hell pero de promesas.

obtenerPersonaje(1)
.then(personaje => { 
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(2)
})
.then(personaje => { 
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(3)
})
.then(personaje => { 
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(4)
})
.then(personaje => { 
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(5)
})
.then(personaje => { 
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(6)
})
.then(personaje => { 
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(7)
})
.catch(error)

// En este punto ya tendriamos resuelto el problema de tener un fallo en la conexión o el callback-hell, pero las promesas se estan resolviendo de una manera lineal, en serie
// mientras que existe la posibilidad de que se resuelvan en paralelo para mejorar el código. Para ello vamos a utilizar Arrays

var ids = [1, 2, 3, 4, 5, 6] // a continuacion lo que vamos a generar es un nuevo array donde cada elemento sea una promesa, con el método Map de los arrays
var promesas = ids.map( function (id) { // El método Map funcionaba colocando una función anonima dentro de el y devolviendo un array casi igual al original
    return obtenerPersonaje(id)         // solo que en este caso, en lugar de devolver el mismo objeto, nos va a devolver la promesa "obtenerPersonaje(id)"
})
Promise.all(promesas) // ese "promesas" es el nombre del nuevo array creado con el método Map, que se ve en la linea 49 y lo que queremos es que se muestre el resultado de 
                      // todas las promesas que hay dentro del array
.then(personajes => console.log(personajes)) // "pesonajes" es el nombre del array que se crea despues de sacar el resultado de todas las promesas
.catch(error)

// Podemos hacerlo con ARROW FUNCTION

var ids = [1, 2, 3, 4, 5, 6]

var promesas = ids.map( id => obtenerPersonaje(id))
Promise.all(promesas)
.then(personajes => console.log(personajes))
.catch(error)

