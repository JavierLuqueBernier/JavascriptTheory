const API_URL = 'https://swapi.dev/api/'
const PEOPLE_API = 'people/:id/';

var obtenerPersonaje = function(id) {

    return new Promise(function (resolve, reject) {               // Para trabajar con promesas lo primero es que hay que crear una promesa que invoca una funcion
        fetch(`${API_URL}`+`${PEOPLE_API.replace(':id', id )}`)   // Al igual que antes, indicamos que datos queremos traer con Fetch()
        .then(data => resolve(data.json()))                       // Indicamos cuales deben de ser los procedimientos a seguir en caso de exito (resolve)
        .catch(() => reject(id))                                  // o de fracaso (catch)
    })
}

const error = (id) => console.log(`Error al obtener personaje ${id}`)  // esta es la accion que se realiza en caso de que ocurra un fallo en la linea 40

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

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6]
    var promesas = ids.map( id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas) // en ese "var" se va a guardar el valor de la tarea asíncrona, es decir, cuando todas las promesas
                                                     //  se resuelvan, guardalo aquí. Para que eso ocurra, debemos utilizar la palabra clave Await,
                                                     // que para la función hasta tener todos los resultados.
                                                     // Y para usar Await, debemos usar Async en la linea 44 y a su vez, toda la parte asincrona,
                                                     // debe ir dentro de un try-catch
        console.log(personajes)
    }
    catch (id) {
        error(id)
    }
}

obtenerPersonajes()

