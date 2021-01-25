/* Consulta a la API con Javascript Vanilla usando httpRequest*/

//Direcciones de mi servidor, osea la api de star wars
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`

//Creo una función que al ser ejecutada inicie mi petición request
function traerDatos(){
    
    var _httpRequest = new XMLHttpRequest;   //Instancio un objeto de tipo request en el cual almacenaremos las respuesta o información de la petición
        
    //Para hacer un request a un servidor usamos los metodos .open() y .send()

    //Para el metodo open se requieren tres parametros
    //1. Definir si queremos obtener datos 'GET' o enviar datos 'POST'
    //2. Definir la ruta del archivo o la api con quien nos queremos comunicar
    //3. Definir si el procesos sera asincrono o sincrono, en este caso asincrono = true
    _httpRequest.open('GET', lukeUrl, true);

    //El metodo send() envia la solicitud a nuestro servidor o archivo externo
    //send() para get y send(string) para POST
    _httpRequest.send();
    //Si el objeto ha tenido un cambio se ejecuta una funcion, este es el callback, 
    //esta funcion hace hasta 4 verificaciones para tratar de obtener comunicacion con el servidor
    _httpRequest.onreadystatechange = function () {
        
        if(_httpRequest.readyState == 4 && _httpRequest.status == 200){ // Si la operacion fue completada (readyState = 4) y el estatus fue exitoso (status === 200)...
            var personaje = JSON.parse(_httpRequest.responseText); //Los datos retornan como string, es necesario cambiarlos a un objeto Json para que sea mas facil manipularlos
            console.log(typeof(personaje))
            console.log(`Hola yo soy, ${personaje.name}`)
        }
    }
}
//Invocamos nuestra función de request
traerDatos()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Implementación utilizando el metodo Fetch de EC6 */

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_API= 'people/:id/'

fetch(`${API_URL}`+`${PEOPLE_API.replace(':id',prompt('Ingresa el id de la persona: '))}`, {model: 'cors'}) //lo de model: 'cors' es necesario para que el navegador no 
                                                                                                            // de problemas al hacer una petición de datos a un server concreto. 
.then(function(response) {
    return response.json();
})

.then(function(persona) {//callback
    console.log(`Hola yo soy ${persona.name}`);
})

.catch( error => console.error('Error:', error));

// con el método replace() que le que decimos a la cadena de string es que reemplace el valor indicado por otro que nosotros facilitamos
// es decir: PEOPLE_API.replace( 'se cambia el primer valor' , 'por este segundo valor')

// El Intercambio de Recursos de Origen Cruzado (CORS) es un mecanismo que utiliza cabeceras HTTP adicionales para permitir que un user agent obtenga permiso
// para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece.


