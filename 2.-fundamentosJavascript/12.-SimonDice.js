const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')

const btnEmpezar = document.getElementById('btnEmpezar') // 6.- Para poder ocultar el boton, lo primero que debemos hacer es recibir la señal que nos llegue el id
                                                         //  desde btnEmepzar en el html

class Juego {               // 3.- Creamos la clase juego con su constructor
    constructor() {
        this.inicializar()  // 4.- Iniciamos dentro del constructor
        this.generarSecuencia()  // 7.- Iniciamos dentro del constructor el generardor de secuencia aleatoria de colores
        this.siguienteNivel()  // 12.- Iniciamos la funcion que nos hará ir avanzando por los diferentes niveles.
    }

    inicializar() {
        this.elegirColor = this.elegirColor.bind(this); // 23.- .bind(this) debe ser utilizado porque al capturar el evento addEventListener, (linea 77) en 'this.elegirColor' 
                                                        // se hace referencia al boton, al elemento html y no a la clase Juego de la linea 9, y eso debe corregirse
                                                        // atandole al addEventListener la función elegirColor()

        btnEmpezar.classList.add('hide') // 5.- Lo primero que va a hacer el juego al iniciar es ocultar el boton de empezar añadiendo a todos los elementos
                                         // de btnEmpezar la clase .hide
        this.nivel = 1; // 10.- Con esto más tarde podremos ir añadiendo los niveles de dificultad
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

    siguienteNivel() {
        this.iluminarSecuencia(); // 13.- Invocamos la función iluminarSecuencia(), es decir, cada vez que llegue un nuevo nivel, se va a iluminar la secuencia
        this.agregarEventosClick(); // 21.- Debemos verificar que los botones que pulse el jugador son correctos, asique empezamos agregando eventos a los clicks
    }

    transformarNumeroAColor(numero) { // 15.- Aquí transformamos los números a colores
        switch(numero) {
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde';
        }
    }

    iluminarSecuencia() { // 14.- Esta función va a recorrer el array de la secuencia hasta el nivel en el que estemos, de ahí el ciclo for
        for (let i = 0; i < this.nivel; i++) { 
            const color = this.transformarNumeroAColor(this.secuencia[i]) // 16.- Le pasamos el número en el que estamos en cada secuencia para que nos lo indique con [i]
            setTimeout(() => this.iluminarColor(color), 1000 * i)  // 17.- pedimos que se ilumine dicho color, pero debe dejar un tiempo al iluminarse cada uno
        }
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light') // 18.- Dentro de los colores guardados (linea 20) le decimos que color queremos y a ese color le añadimos la clase .light
        setTimeout(() => this.apagarColor(color), 350) // 19.- La iluminación solo debe parpadear, por lo que le añadimos un temporizador y decimos que al finalizar el tiempo
                                                       // seleccionado (350 ms) debe ejecutarse la función apagarColor() para que vuelva al color original
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light') // 20.- le quitamos la clase .light a los colores con esta función
    }

    agregarEventosClick() {
        this.colores.celeste.addEventListener('click', this.elegirColor.bind(this)) // 22.- Agregamos un escuchador de eventos en cada uno de los colores
        this.colores.violeta.addEventListener('click', this.elegirColor.bind(this))
        this.colores.naranja.addEventListener('click', this.elegirColor.bind(this)) 
        this.colores.verde.addEventListener('click', this.elegirColor.bind(this))
    }

    elegirColor(ev) { // 24.- Utilizamos ev como parametro pues hace refencia a lo captado en el EventListener

    }
}

function empezarJuego() {    // 1.- creamos la función que va a ser llamada desde el html al pulsar el boton de inicio
    var juego = new Juego()  // 2.- para que esto se cree y funciona, debemos crear la clase Juego
}