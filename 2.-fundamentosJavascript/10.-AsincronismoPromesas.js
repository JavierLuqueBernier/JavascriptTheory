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
  .then(personaje => console.log(`El personaje 1 es ${personaje.name}`))
  .catch(error)