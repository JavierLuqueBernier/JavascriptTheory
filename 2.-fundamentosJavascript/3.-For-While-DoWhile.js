var jose = {
    nombre: 'Jose',
    apellido: 'calvano', //clave: Valor
    edad: 28,
    peso: 60
}

//Creamos una funcion que nos dice cuanto adelgazamos o engordamos a lo largo de un año (365 dias)

console.log(`Al inicio del año ${jose.nombre} pesa ${jose.peso} kilogramos`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_AÑO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random();
    if (random < 0.25) {
        aumentarDePeso(jose);
    } else if (random < 0.5) {
        adelgazar(jose);
    }
}

console.log(`Al final del año ${jose.nombre} pesa ${jose.peso.toFixed(2)} kilogramos`); 
                                                                    //toFixed() es una funcion propia de Js que redondea al numero de decimales que nosotros decidamos

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Loop WHILE */

var jose = {
    nombre: 'Jose',
    apellido: 'calvano', //clave: Valor
    edad: 28,
    peso: 60
}

//Creamos una funcion que nos dice cuanto adelgazamos o engordamos a lo largo de un año (365 dias)

console.log(`Al inicio del año ${jose.nombre} pesa ${jose.peso} kilogramos`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_AÑO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = jose.peso - 3;
var dias = 0

while (jose.peso > META) {

    if (comeMucho()) {
        aumentarDePeso(jose)
    }
    if (realizaDeporte()) {
        adelgazar(jose)
    }
    dias += 1;
}

console.log(`Pasaron ${dias} dias hasta que ${jose.nombre} adelgazó 3 kilogramos`); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Loop Do While */

var contador = 0;

var llueve = () => Math.random()>0.25;

do{
  contador++;
}while(!llueve());

var frecuencia = contador===1 ? "vez":"veces";
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);