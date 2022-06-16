//Ejercicio 1 Convierte pulgadas en centimetros//

const cm = 2.54;
let pulgadas = prompt("Ingrese Pulgadas a Centimetro");
let resultado

convertidor(cm,pulgadas);

function convertidor(cm , pulgadas){

    resultado = pulgadas * cm;
    return resultado;
}

console.log(pulgadas + "Pulgadas equivalen a:" + resultado +"Centimetros");

//Ejercicio 2
let nombre = prompt("Ingrese un nombre");

function convertidor(nombre){
    return "http://www."+nombre+".com";
}

console.log(convertidor(nombre));

//Ejercicio 3 Crear una función que recibe un string y devuelve la misma frase pero con admiracion.

let frase = prompt("Ingrese una frase");

function convertidor(frase){
    return "¡"+frase+"!";
}

console.log(convertidor(frase)); 

//Ejercicio 4

let Edad_Perro= 0;
let Edad_Humano=prompt("");
//let resultado;

function calcularEdadperros(Edad_Humano){
    Edad_Perro= Edad_Humano * 7;
    return Edad_Perro;
}



console.log(calcularEdadperros(Edad_Humano));

//Ejercicio 5 

let valor = 0;
let sueldo_mensual=prompt("Ingresa tu sueldo mensual");

function calcular_sueldo(sueldo_mensual){
    valor = sueldo_mensual / 40;
    return console.log(valor);
}

calcular_sueldo(sueldo_mensual);

//Ejercicio 6 

let altura=prompt("Ingresa tu altura");
let peso = prompt("Ingresa tu peso");
let imc=0;

function calculadorIMC(altura,peso){

    imc=peso/altura;
    return console.log("tu imc es:" + imc);

}

calculadorIMC(altura,peso);

//Ejercicio 7

let texto = prompt("Ingresa un Texto");

mayuscula(texto);

function mayuscula(texto){
    return console.log(texto.toUpperCase());
}

//Ejercicio 8

let parametro="hola";

tipodeDato(parametro);
function tipodeDato(){

    return console.log("El tipo de dato es:" + typeof parametro)


}

//Ejercicio 9 

let radioCirculo=prompt("Ingrese el radio del circulo");
let circunferencia=0;

function calculoCircunferencia(radioCirculo){
    circunferencia = (2 * Math.PI) * radioCirculo;
    return console.log("La circunferencia del circulo es:" + "" + circunferencia);
}

calculoCircunferencia(radioCirculo);

