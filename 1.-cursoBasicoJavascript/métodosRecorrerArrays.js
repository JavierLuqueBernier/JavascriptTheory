var articulos = [
	{ nombre: '📱', precio: 1000 },
	{ nombre: '💻', precio: 1500 },
	{ nombre: '🖥', precio: 2000 },
	{ nombre: '⌨️', precio: 100 },
	{ nombre: '🖱', precio: 70 },
	{ nombre: '🚗', precio: 30000 },
];

// Método Filter -- Genera un nuevo array
var articulosFiltrados = articulos.filter(function(articulo) { /* aqui va "articulo" porque debemos hacer referencia a uno solo de los objetos dentro del array "articulos" */
	return articulo.precio <= 500;
});

articulosFiltrados; /* (2) [{…}, {…}] -->  0: {nombre: "⌨️", precio: 100}, 1: {nombre: "🖱", precio: 70} */




// Método Map -- Ayuda a mapear ciertos elementos de los articulos, es necesario generar nuevo array
var nombreArticulos = articulos.map(function(articulo) {
	return articulo.nombre;
});

nombreArticulos; // (5) ["📱", "💻", "🖥", "⌨️", "🖱", "🚗"]




// Método Find -- Ayuda a encontrar algo dentro del array articulos y deja de buscar en cuanto encuentra uno que cumpla
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});




// Método ForEach -- No es necesario generar nuevo array, se utiliza para realizar un recorrido de un array principal
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//  resultado del console.log --> "📱"  "💻"  "🖥"  "⌨️"  "🖱"  "🚗"




// Método Some -- Se genera nuevo array, regresa un condición en Boolean
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos; // True