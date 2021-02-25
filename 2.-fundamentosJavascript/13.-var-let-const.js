// scope global - disponible en todos los scopes
var sacha = "sacha1"

function miFuncion() {
	// empieza scope miFuncion

	if (true) {
		// empieza scope if

		var sacha = "sacha2";
		// se declara dentro del scope miFunción
		// está disponible desde el inicio de la función
		// tendrá valor undefined hasta ejecutarse esta linea
		// dejará de estar disponible cuando termine el scope miFuncion

		let sacha2 = "sacha3";
		const sacha3 = "sacha4";
		// se declaran dentro del scope if
		// están disponibles a partir de esta línea con el valor asignado
		// dejan de estar disponibles cuando termine el scope if

		// termina scope if
		// los datos declarados con let y constdentro del scope if dejan de existir
	}
	if (true) {
		// inicia scope if 2

		let sacha = "sacha5";
		let sacha2;
		console.log(sacha, sacha2);
		// imprimirá: sacha5 undefined
		// a pesar de haber tres sacha declaradas
		// (scope global, scope miFunción, scope if 2)
		// console.log tomará la declarada en el scope más cercano
		// (scope if 2 - este)
		// sacha2 no existe en ningún otro scope
		// en este (if 2) fue declarade más no definida
		// por lo que su valor es undefined

		// termina scope if 2
		// los datos declarados con let y const dentro del scope if 2 dejan de existir
	}
	console.log(sacha);
	// imprimirá: sacha2 (declarada en scope miFunción, inicializada en scope if)

	// termina scope miFunción
	// los datos declarados con let, const y var dentro del scope miFunción dejan de existir
}

console.log(sacha);
// imprimirá: sacha1