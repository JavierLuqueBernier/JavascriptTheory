//Función constructora: esto es como el modelo. Indica que es lo que se debe esperar al crear un nuevo objeto de tipo Auto
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


//new genera una instancia, una instacia es generar un objeto que proviene de un objeto:
var numero = prompt("How many cars?")
var autos = []; //array
for(var i = 0; i < numero; i++){

    var marca = prompt("brand?");
    var modelo = prompt("model?");
    var annio = prompt("year?");
    autos.push(new auto(marca, modelo, annio));
}

for(var i = 0; i < autos.length; i++) {
    console.log(autos[i])
}
