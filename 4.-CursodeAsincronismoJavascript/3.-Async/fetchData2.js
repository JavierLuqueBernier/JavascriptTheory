// importamos el modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// funcion principal
const fetchData = (url_api) => { 

    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest(); // instanciamos la conexion
  
        xhttp.open('GET', url_api, true); // abrir una conexion con el metodo, la ruta y si es asincrono
  
        xhttp.onreadystatechange = (() => { // validacion del llamado
    
            if(xhttp.readyState === 4){ // el state 4 es el ultimo de la peticion

                (xhttp.status === 200) ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error('Error ', url_api))
                // Se debe parsear porque nos envia un texto plano que Javascript no es capaz de leer
      
            }
        });

        xhttp.send(); // por ultimo enviamos la peticion
    });
  
  
}

module.exports = fetchData;