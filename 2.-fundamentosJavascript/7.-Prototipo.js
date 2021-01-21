function Persona(nombre, apellido, altura) { //esto es una funcion constructora, dado que construye como debe de ser cada uno de los objetos de la clase que digamos
    this.nombre = nombre;                    // en este caso de la clase Persona
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y mido ${this.altura} asique soy ${this.altura >= 1.8 ? 'alto' : 'bajo'}`)
    // Esta función no se puede convertir en Arrow Function porque dentro de las Arrow Function no funciona el elemento This, por lo que nos daría error al ejecutar
}

var sacha = new Persona('Sacha','Lifszyc', 1.9)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Persona('Arturo', 'Martinez', 1.7)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Como en javascript no existe herencia como tal, debemos acudir a la herencia prototipal, que es de la siguiente manera*/

function heredaDe (prototipoHijo, prototipoPadre) {
    var fn = function () {};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;                    
    this.apellido = apellido;
    this.altura = altura;
}

function Desarrollador(nombre, apellido, altura) {
    this.nombre = nombre;                    
    this.apellido = apellido;
    this.altura = altura;
}

heredaDe(Desarrollador, Persona) //Debemos declarar este mecanismo de herencia justo después de la funcion y antes que la clase Desarrollador (linea 46)
                                 // para que se mantenga que al crear la clase Desarrollador, esta pise la función saludar de la clase Persona (linea 42)

Persona.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y mido ${this.altura} asique soy ${this.altura >= 1.8 ? 'alto' : 'bajo'}`)
}

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y mido ${this.altura} asique soy ${this.altura >= 1.8 ? 'alto' : 'bajo'} y soy desarrollador/a`)
}

var sacha = new Persona('Sacha','Lifszyc', 1.9)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.7)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Sin embargo, si queremos generar "herencias" de un prototipo a otro, hay una manera más fácil: con las clases (class) */

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;                    
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y mido ${this.altura} asique soy ${this.altura >= 1.8 ? 'alto' : 'bajo'}`)
    }
}

class Desarrollador extends Persona { // al usar Extends lo que hacemos es heredar los atributos de la clase Padre (que en realidad sigue siendo un prototipo)
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura) // la palabra "super" es necesaria porque le indica al constructor que debe traer esos atributos del padre
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y mido ${this.altura} asique soy ${this.altura >= 1.8 ? 'alto' : 'bajo'} y soy desarrollador/a`)
    }
}

var sacha = new Persona('Sacha','Lifszyc', 1.9)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.7)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* pero ocurre que los atributos o parametros no tienen porque ser solo texto, tambien pueden ser funciones: */

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;                    
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(fn) { //aqui puede ir "fn" como puede ir "Manolo", lo importante es que haya un valor cualquiera para que la funcion entienda que debe recibir algo
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y mido ${this.altura} asique soy ${this.altura >= 1.8 ? 'alto' : 'bajo'}`);
        if (fn) { // aqui el "fn" sirve para que la función entienda que si recibe lo que sea debe ejecutarse y si no lo recibe, no.
                  // si en el "fn" de saludar(fn) no recibirmos nada, entonces, esta condición sería falsa, no se cumple el "if" por lo que no se ejecuta lo que lleve dentro.

            fn(this.nombre, this.apellido) //le pasamos esos parametros, porque son los parametros necesarios para que como minimo funcione la función responderSaludo()
                                           // que declaramos más abajo. El nombre elegido da igual mientras que coincida con el que va entre parentesis en el "if"
        }
    }
}

class Desarrollador extends Persona { 
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(fn) {
        //var nombre = this.nombre;
        //var apellido = this.apellido;
        var {nombre, apellido} = this; // esta linea y las dos superior son equivalentes, lo que facilita desestructurar la linea de debajo quitando ${this.nombre} por ${nombre}
        console.log(`Hola, mi nombre es ${nombre} ${apellido} y mido ${this.altura} asique soy ${this.altura >= 1.8 ? 'alto' : 'bajo'} y soy desarrollador/a`)
        if (fn) {
            fn(nombre, apellido, true) //con ese True estamos diciendo que siempre que se invoque un prototipo o clase que sea de tipo Desarrollador, se va
                                       // a cumplir el tercer parametro de la función "responderSaludo" (linea 124), por lo que se cumplirá el if intrínseco
        }
    }
}

var sacha = new Persona('Sacha','Lifszyc', 1.9)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.7)

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah, mira, no sabía que eras desarrollador`)
    }
}

sacha.saludar() // en esta declaración, el fn será falso, porque no le estamos pasando ningun valor
erika.saludar(responderSaludo) // en esta declaración, el fn será verdadero, porque le estamos pasando un valor
arturo.saludar(responderSaludo) // en esta declaración, el fn será verdadero, porque le estamos pasando un valor