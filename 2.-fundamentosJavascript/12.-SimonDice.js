const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')

const btnEmpezar = document.getElementById('btnEmpezar') // 6.- Para poder ocultar el boton, lo primero que debemos hacer es recibir la señal que nos llegue el id
                                                         //  desde btnEmepzar en el html

class Juego {               // 3.- Creamos la clase juego con su constructor
    constructor() {
        this.inicializar()  // 4.- Iniciamos dentro del constructor
        this.generarSecuencia()     // 7.- Iniciamos dentro del constructor el generardor de secuencia aleatoria de colores
    }

    inicializar() {
        btnEmpezar.classList.add('hide') // 5.- Lo primero que va a hacer el juego al iniciar es ocultar el boton de empezar añadiendo a todos los elementos
                                         // de btnEmpezar la clase .hide
        this.nivel = 1; // 10.- Con esto más tarde podremos ir añadiendo niveles de dificultad
        this.colores = { // 11.- Guardamos los colores para poder trabajar con ellos más tarde
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    generarSecuencia() {  // 8.- creamos la función que va a generar la secuencia aleatoria, solo que en lugar de colores será de numeros que luego convertiremos en colores
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() *4))// 9.- Al crear la secuencia indicamos que esta debe tener un total de 10 dígitos.
                                                // Cada uno de esos dígitos va a oscilar entre 0 y 1 (propiedad de Math.random), pero como lo que queremos es que dichos dígitos
                                                // oscilen entre 0 y 4, multiplicamos el valor de Math.random por 4. Como el valor que nos va a dar es decimal, hacemos el 
                                                // redondeo con Math.floor. Esos números van a ser insertados en el array con el método .fill(indispensable para 
                                                // el funcionamiento del .map) y leidos con el método .map
        
    }
}

function empezarJuego() {    // 1.- creamos la función que va a ser llamada desde el html al pulsar el boton de inicio
    var juego = new Juego()  // 2.- para que esto se cree y funciona, debemos crear la clase Juego
}