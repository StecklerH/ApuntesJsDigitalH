// funciona para trabajar por casos como el if




var numero = 1;

switch (numero) {
    case 1:
        console.log("soy uno");
        break;
    case 2:
        console.log("soy dos");
        break;
    case 100:
        console.log("Soy un 100");
        break;
    default: 
        console.log("no soy ninguno");
}

let dia = 'jueves'
function finDeSemana (dia) {	
	switch (dia){
	case "Viernes":
	console.log('buen finde')
		break; 
	case "lunes":
	console.log('buena semana')
		break;
	default:
	console.log('buen dia')
    }
}

finDeSemana(dia);