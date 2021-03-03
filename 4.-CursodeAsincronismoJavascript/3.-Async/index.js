const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    })
}

// Ahora ejecutamos la promesa con Async y Await
const doSomething = async () =>{
    const Something = await doSomethingAsync();
    console.log(Something);
}

console.log('Before');
doSomething();
console.log('After');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Como trabajar con try-catch

const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    })
}

const anotherFunction = async () =>{
    try{
        const Something = await doSomethingAsync();
        console.log(Something);
    }catch (error){
        console.error(error);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');
