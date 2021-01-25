/* Javascript Vanilla */

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_API = 'people/:id/';

var obtenerPersonaje = async function(id) {
    let request = await fetch(`${API_URL}`+`${PEOPLE_API.replace(':id',prompt('Ingresa el id de la persona: '))}`, {model: 'cors'})
    let data = await request.json()
    console.log(`Hola, yo soy ${data.name}`)
}
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_API = 'people/:id/';

var obtenerPersonaje = async function(id) {
    let request = await fetch(`${API_URL}`+`${PEOPLE_API.replace(':id', id )}`)
    let data = await request.json()
    console.log(`Hola, yo soy ${data.name}`)
}
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
// el problema de este tipo de peticion es que no recibimos las respuestas en el orden que las habiamos pedido, si no de manera aleatoria en el orden que vayan llegando.
// la principal solucion es anidar unos callbacks dentro de otros:

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_API = 'people/:id/';

var obtenerPersonaje = async function(id, callback) {
    let request = await fetch(`${API_URL}`+`${PEOPLE_API.replace(':id', id )}`)
    let data = await request.json()
    console.log(`Hola, yo soy ${data.name}`)

    if (callback) {
        callback(); // esto significa: si nos envian un callback, llamalo para que se ejecute
    }
}

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {

                    })
                })
            })
        })
    })
})

//El problema de este procedimiento es que se obtiene lo que se conoce como callback-Hell por lo caotico de las llamadas y es sensible a fallos en la conexión
// Para evitar esto, se hace uso de lo que se conoce como Promesas, que se ve en el siguiente archivo

