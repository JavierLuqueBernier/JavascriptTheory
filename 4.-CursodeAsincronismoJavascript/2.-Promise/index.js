const somethingWillHappen = () => new Promise((resolve, reject) => 
 true ?
 resolve('Hey!') :
 reject('Whoops!'));

somethingWillHappen()
  .then( response => console.log(response))
  .catch( err => console.log(err));

///////////////////////////////////////////////////////////

const error = new Error('Whoops!!'); // Error que nos permite ver en consola más detalles del error (metido en linea 17)

const somethingWillHappen2 = () => new Promise((resolve, reject) =>
 true ? 
 setTimeout(() => resolve('True'), 5000) :
  reject(error)
);

somethingWillHappen2()
  .then( response => console.log(response))
  .catch( err => console.log(err));

// Para correr todas las promesas tenemos el método Promise.all() que nos retornara un array con la respuesta de todas las promesas que pasemos como parametro.

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then( response => {
      console.log('Array of results', response);
  })
  .catch(err => {
    console.log(err)
  })