
// //1) Crear una función que pida un valor por parámetro y muestre los 10
// //números siguientes.
// let num = 1;

// function corridaNumeros(num) {
//     for (let i = 0; i <= 10; i++) {

//         console.log(num++);
//     }
// }

// corridaNumeros(num);
// // 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

// for (let i = 5; i <= 20; i += 3) {
//     console.log(i)
// }

// //3) Escribir un programa que muestre la sumatoria de todos los números
// //entre el 0 y el 100
// let sumatoria = 0;
// for (let i = 0; i <= 100; i++) {
//     console.log("la sumatoria es: " + (sumatoria = sumatoria + i));
// }

// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.

//4! = 4 * 3 * 2 * 1 = 24

// let factorial = (numero) =>{
//     let total = 1;
//     for(i=1; i<=numero;i++){
//         total = total *i;
//     }
//     return total;
// }

// let numero = parseInt(prompt("Ingrese numero a calcular factorial: "));

// console.log(factorial(numero));

// 5) Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.

// function fibonacci(numero){
//     let x=0;
//     let y=1;
//     console.log(x);
//     do{
//         console.log(y);
//         z=x;
//         x=y;
//         y=z+y;


//     }while (y<=numero)
// }
// fibonacci(10);


function noParesDeCONtarImparesHasta(nro){
    let contador = 0;
    for(let i=0; i <= nro ; i++){
         if(i%2 !==0){
             console.log(i);
             contador++;
         }
    }

    return console.log(contador);
}

noParesDeCONtarImparesHasta(4);