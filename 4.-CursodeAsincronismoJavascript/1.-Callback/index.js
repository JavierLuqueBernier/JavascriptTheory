// Los callbacks son basicamente una funcion que recibe como argumento otra funcion

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) { // aqui la funcion "calc" está recibiendo como parametro otra funcion, que de forma generica se llamará callback pero que en la linea 12
                                      // veremos que será la funcion "sum"
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));

//////////////////////////////////////////////////////

function printDate(dateNow) {
    console.log(dateNow);
}

function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

date(printDate);