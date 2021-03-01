// importamos el modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// direccion de la API
let api = 'https://rickandmortyapi.com/api/character/';

// funcion principal
function fetchData(url_api, callback){ 
  
  let xhttp = new XMLHttpRequest(); // instanciamos la conexion
  
  xhttp.open('GET', url_api, true); // abrir una conexion con el metodo, la ruta y si es asincrono
  
  xhttp.onreadystatechange = (event) => { // validacion del llamado
    
    if(xhttp.readyState === 4){ // el state 4 es el ultimo de la peticion
      
      if(xhttp.status === 200){ // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500 
        callback(null, JSON.parse(xhttp.responseText)); // el primer valor(null) es el err y el siguiente, el resultado 
      } else {                                          // ejecutamos el callback con el resultado 
        let error = new Error('Error: ' + url_api); 
        return callback(error, null); // matamos el proceso con un error
      }
    }
  }
  xhttp.send(); // por ultimo enviamos la peticion
}


fetchData(api, (error1, data1) => { // primero buscamos la lista de personajes
  if(error1) return console.error(error1); // si error, matamos retornando un error
    fetchData(api + data1.results[0].id, (error2, data2) => { // luego buscamos en la api el id de Rick
      if(error2) return console.error(error2); // si error, matamos retornando un error
        fetchData(data2.origin.url, (error3, data3) => { // por ultimo la consulta a la api que contiene su dimension      
          if(error3) return console.error(error3); // si error, matamos retornando un error     
            console.log(data1.info.count); // mostramos los resultados :) 
            console.log(data2.name);
            console.log(data3.dimension);   
        });
    });
});