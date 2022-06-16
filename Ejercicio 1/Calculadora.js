//Funciones de la calculadora

//Funcion Suma
function suma(num1,num2){
    //num1=parseInt(prompt("Ingresa numero 1"));
    //num2=parseInt(prompt("Ingresa numero 2"));
     //resultado=num1 + num2;

    return num1+num2;
}

//Funcion resta
function resta(num1,num2){
    return num1 - num2;
}

//Funcion Multiplicacion
function multi(num1,num2){
    return num1 * num2;
}

//Funcion Division
function Division(num1,num2){
    return num1 / num2;
}

console.log("--------------Testeo de Operaciones / Calculadora --------------");

let num1=parseInt(prompt("Ingrese numero 1"));
let num2=parseInt(prompt("ingrese numero 2"));

console.log("La suma es: " + suma(num1,num2));