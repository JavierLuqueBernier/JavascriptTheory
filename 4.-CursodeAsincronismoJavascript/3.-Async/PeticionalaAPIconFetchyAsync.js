const API = 'https://rickandmortyapi.com/api/character/';
const fetch = require('node-fetch');

const getAPI = async (url_api) => {
    // Declaramos nuestra promesa con Async
    return new Promise(async (resolve, reject) => {
        let response = await fetch(url_api);

        response.status == 200 // Validacion para ver si se resuelve la promesa
        ? resolve(response.json())
        : reject(new Error('Error'));
    });
};

// Hasta aqui sería la creacion de la promsea, a partir de aqui es como se consumiría

let getinfo = async (url) => {
    try {
        let response1 = await getAPI(url); // esperamos a la ejecucion de getAPI
        console.log('Nombre: ', response1.results[0].name); // Y despues de su ejecucion proseguimos
        console.log('Especie: ', response1.results[0].species);
        let request2 = response1.results[0].origin.url;
        let response2 = await getAPI(request2); // Esperamos por la segunda ejecucion
        console.log(response2.dimension);
    } catch (err){
        console.log(err);
    }
};

getinfo(API);