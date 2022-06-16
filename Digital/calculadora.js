//Ejercicio Parte 1 y 2
//Funciones de la calculadora

//Variables Globales
let num1=Number(prompt("Ingresa numero 1"));
let num2=Number(prompt("Ingresa numero 2"));
let resultado;
//suma
function suma(num1,num2){
    //num1=parseInt(prompt("Ingresa numero 1"));
    //num2=parseInt(prompt("Ingresa numero 2"));
     resultado=num1 + num2;

    return console.log("La Suma es:" + "" + resultado);
}

suma(num1,num2);
//resta
function resta(num1,num2){
 
    resultado=num1 - num2;

    return console.log("La Resta es:" + "" + resultado);
}
resta(num1,num2);
//Multi
function multi(num1,num2){
 
    resultado=num1 * num2;

    return console.log("La multiplicacion es:" + "" + resultado);
}
multi(num1,num2);
//Division
function Division(num1,num2){
 
    resultado=num1 / num2;

    return console.log("La Division es:" + "" + resultado);
}
Division(num1,num2);

//------------------------------------------------Ejercicio Parte 3 Ejercicio 1--------------------------------------------------------------//
let num1=parseInt(prompt("Ingresa numero 1"));
//let num2=parseInt(prompt("Ingresa numero 2"));
let resultado;

function multi(num1,num2){
 
    resultado=num1 * num2;

    return console.log("La multiplicacion es:" + "" + resultado);
}


function cuadrodoDeUnNumero(num1){
    multi(num1,num1);
    return console.log(resultado);
}

cuadrodoDeUnNumero(num1);

//----------------------------------------------Ejercicio 2-----------------------------------------------------------//

let num1=parseInt(prompt("Ingresa numero 1"));
let num2=parseInt(prompt("Ingresa numero 2"));
let resultado;

function suma(num1,num2){
    //num1=parseInt(prompt("Ingresa numero 1"));
    //num2=parseInt(prompt("Ingresa numero 2"));
     resultado=num1 + num2;

    return resultado;
}

function Division(num1,num2){
 
    resultado=num1 / num2;

    return resultado;
}


function promedioDeTresNumeros(num1,num2,num3){
    num3=parseInt(prompt("Ingrese numero 3"));
    suma(num1,num2);
    suma(resultado,num3);
    Division(resultado,3);
    
    return console.log("Promedio " + resultado);
}

promedioDeTresNumeros(num1,num2);

//------------------------------------------------------Ejercicio 3-----------------------------------------------------
let num1=parseInt(prompt("Ingresa numero 1"));
let num2=parseInt(prompt("Ingresa numero 2"));
let resultado;

function multi(num1,num2){
 
    resultado=num1 * num2;

    return resultado;
}

//Division
function Division(num1,num2){
 
    resultado=num1 / num2;

    return resultado;
}


function calcularPorcentaje(num1,num2){
    multi(num1,num2)
    Division(resultado,100)
    return resultado;
}

calcularPorcentaje(num1,num2);

//----------------------------------------------------ejercicio 4 ----------------------------------------------------------

let num1=parseInt(prompt("Ingresa numero 1"));
let num2=parseInt(prompt("Ingresa numero 2"));
let resultado;

function multi(num1,num2){
 
    resultado=num1 * num2;

    return resultado;
}

//Division
function Division(num1,num2){
 
    resultado=num1 / num2;

    return resultado;
}

function generadorDePorcentaje(num1,num2){
    Division(num1,num2)
    multi(resultado,100)
    return resultado;
}

console.log(generadorDePorcentaje(num1,num2));