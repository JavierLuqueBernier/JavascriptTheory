var estudiantes = [ Maria, Sergio, Rosa, Daniel]

function saludarEstudiantes(estudiante) {
    console.log ( `Hola,  + ${estudiante}`);
}

//formas de recorrer arrays//

/* For */

for (var i = 0; i < estudiantes.length; i++ ) {
    saludarEstudiantes(estudiantes[i]);
}

/* For of */

for ( estudiante of estudiantes) {
    saludarEstudiantes(estudiantes);
}

/* While */  // Aqui se recorre el array hasta que la condicion se deja de cumplir, lo cual ocurre porque a cada vuelta, shift saca el primer elemento del array hasta que el
             // array se queda a 0

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiantes);
}