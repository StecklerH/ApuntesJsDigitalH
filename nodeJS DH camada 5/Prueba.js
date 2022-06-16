let num1=100;
let num2=100;

let sumar = (a,b) => a + b;

let resta = (a,b) => a - b;


let sumaresta = (a,b,c) => sumar(a,b)/c;


console.log(sumaresta(num1,num2,100));

let mostrarNombre= () => "Mi nombre es Hernán"; 

let multiplicarPorDos = () => 123*2;

console.log(multiplicarPorDos());
console.log(mostrarNombre());

let saludar = nombre => "Hola, " + nombre + "!";

console.log(saludar("Hugo"));

let test1 = (x,y) => y-x;

console.log(test1(10,40));

//let test2 = (x,y) => console.log(x*2);

console.log(test2(5));

function test2(x,y){
    return x*2
    console,log(x);
    return x/2
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


//anidando if dentro de un if
let edad = prompt("Ingrese su edad");

if(edad >= 21){
    console.log("permitido")
    let numero = 10;
    let clave = prompt("decime la clave secreta")
    if(clave == numero){
        console.log("Puedes entrar");
    }else{
        console.log("No puedes ingresar");
    }
}else{
    console.log("No cumples con la edad");
}

