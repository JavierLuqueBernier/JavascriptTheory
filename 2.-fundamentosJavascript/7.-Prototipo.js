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

heredaDe(Desarrollador, Persona) //Debemos declarar esta funcion antes que la clase Desarrollador (linea 52) para que mantenga que al crear la clase Desarrollador,
                                 // esta pise la función saludar de la clase Persona

Persona.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y mido ${this.altura} asique soy ${this.altura >= 1.8 ? 'alto' : 'bajo'}`)
}

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y mido ${this.altura} asique soy ${this.altura >= 1.8 ? 'alto' : 'bajo'} y soy desarrollador/a`)
}

var sacha = new Persona('Sacha','Lifszyc', 1.9)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.7)



