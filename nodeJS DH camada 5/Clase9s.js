
const prompt = require("prompt-sync")({sigint:true});
// //promedio de notas
function promedioNotas(nota1,nota2,nota3){
    let promedio = 0;
    return (promedio=(nota1+nota2+nota3)/3);
}

promedioNotas(10,20,15);


// // //cambiar de pesos a dolares
 function Cambio(pesos){
     const dolar = 199;
     let cambiar;
        return console.log("pesos a dolar: "+ pesos + " pesos" + " equivale a: " + (cambiar=pesos*dolar)+" dolares")
 }

 Cambio(100);

// //  //Hacer un programa que calcule el salario de un empleado, si se descuenta el 20% de su salario actual.

 function calculoSalario(salario){
     let calculo;
    return console.log("tu salario menos el 20% es: " + (calculo = salario * 0.80 ));
}

 calculoSalario(10000);

//  //Ingresar un número y mostrar si es número par o impar. 

function numeroParImpar(num){
    if(num%2 == 0){
        console.log("Este numero es par");
    }else {
        console.log("Este numero es impar")
    }
 
}

//Ingresar un número y mostrar si es número par o impar. 
numeroParImpar(3);

 function evaluarPromedio(num1,num2,num3){
    if(promedioNotas(num1,num2,num3) > 10.5){
       console.log("aprobado");
    }else{
        console.log("reprobado")
    }
   
 }
 evaluarPromedio(10,5,20);

 //Elaborar un programa que simule una clave de acceso. Si el usuario es: "ADMIN" 
 //y la clave "123456" mostrar el mensaje "ACCESO PERMITIDO". Caso contrario, mostrar el mensaje "ACCESO DENEGADO".

 function EvaluarClave(admin,clave){
     if(admin === "ADMIN" && clave=== "123456"){
         console.log("ACCESO PERMITIDO");
     }else {
         console.log("ACCESO DENEGADO");
     }
 }

 EvaluarClave('ADMIN','123456');
 //Elaborar un programa que permita ingresar un número entero del 1 al 12 y muestre la tabla de multiplicar de dicho número.

 function tablaMulti(num){
     for(let i=0; i<=10; i++){
         console.log(i + " X " + num + " = " + (num*i));
     }
 }

 tablaMulti(5);


 //Elaborar un programa que muestre el mayor de 10 números ingresados.
let arreglo = [1,25000,500,4,100];
function CalcularNumeroMayor(array){
    let numeromayor=0;
for(let i= 0; i < arreglo.length; i++){
    if(numeromayor < arreglo[i])
        numeromayor = arreglo[i];
    
    }

    return console.log("El numero mayo es: " + numeromayor);
}

CalcularNumeroMayor(arreglo);

//Elaborar un programa que muestre la cantidad de números pares e impares entre 10 números.
let arregloparIMpar = [2,3,4,5,6]
function calcularNumerosParesImpares(array){    
    for(let i=0; i<array.length; i++){ 
        numeroParImpar(array[i]);
    }
}
calcularNumerosParesImpares(arregloparIMpar);

//Escribir un programa que, ingresando un número, imprima los números desde 1 hasta ese mismo.
let numero = parseInt(prompt("ingresa un nuemro"));
function corridaNumeros(num){
    for(let i=1; i<=num;i++){
        console.log(i);
    }
}

corridaNumeros(numero);