const helloWorld = () =>{
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('helloWorld'),3000)
        : reject(new Error ('Test Error'))
    })
}


const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);

}
helloAsync();

//Nos permitirá usar trycatch y trabajar los errores correctamente.

const anotherFunction = async() => {
    try{
        const hello = await helloWorld();
        console.log(hello);

    } catch (error){
        console.log(error);
        
    }
}

anotherFunction();
