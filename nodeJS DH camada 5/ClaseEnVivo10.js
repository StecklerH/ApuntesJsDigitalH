// /* Ejercicio: Lista de Super 
// Instanciá un nuevo arreglo y guardalo en la variable listaDeSuper Usa la notación con corchetes y agregá los productos que tienes que comprar. Ej listaDeSuper[0]="sal"
// Accedé al primer elemento de tu lista usando la notación de corchetes.
// Crea una variable llamada ultimoElemento y asignale un número que represente el índice del último elemento de tu lista de super. (length - 1 ??)
// Accedé a ese último elemento usando la variable ultimoElemento */

// let listaDeSuper = [];

// listaDeSuper.push("Azucar", "leche" , "vino" , "Birra");

// listaDeSuper[0];

// let ultimoElemento = listaDeSuper.length - 1;

// console.log(listaDeSuper[ultimoElemento]);

// // Ejercicio: Lista de Súper (2)
// // Vuelve a la lista del ejercicio anterior y haz lo siguiente:
// // ​
// // Usa .push() y agrega dos nuevos productos a tu lista.
// // Usa .unshift() y agrega dos productos al principio de tu lista.
// // Qué tan largo es el arreglo en este punto?
// // Usa .pop() y sacá un producto y guardalo en una variable que se llame noHabia
// // Usa .shift() y sacá un objetivo y guárdalo en otra variable que se llame comprado
// // Qué tan largo es el arreglo ahora? */

// listaDeSuper.push("Yerba" , "galletitas");

// listaDeSuper.unshift("papas Fritas", "coca-cola");

// console.log(listaDeSuper.length);

// let nohabia = listaDeSuper.pop();

// let comprado = listaDeSuper.shift();

// console.log(listaDeSuper.length);

// /* Lista de Súper (3)
// Vuelve a la lista del ejercicio anterior y haz lo siguiente:
// ​
// Usa un For Loop y muestra cada ítem de listaDeSuper en la consola
// */

// // for(let i=0 ; i < listaDeSuper.length ; i++){
// //     console.log(listaDeSuper[i])
// // }


// let peliculas=["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

// console.log(peliculas);

// function convertirMayuscula(array){
//     for(let i=0;i<peliculas.length; i++){
//         console.log(peliculas[i].toUpperCase())
//     }
// }

// convertirMayuscula(peliculas);

// let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
// let elementosEliminados;
// function combinarArreglos(array1,array2){
//     for(let i = 0 ; i < array2.length ; i++ ){
//         array1.push(array2[i]);
//     }
//     elementosEliminados = array1.pop();
//     convertirMayuscula(array1);
// }

// combinarArreglos(peliculas,peliculasAnimadas);

// console.log("Elementos Eliminados " + elementosEliminados);


// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// function compararCalificaciones(array1,array2){
   
//     for(let i=0 ; i < array1.length ; i++){
//         for(let j=0; j< array2.length ; j++){
//             if(array1[i] === array2[j] ){
//                 console.log("las Calificaciones son iguales");
//             }else {
//                 console.log("las Calificaciones son diferentes");
//             }
//         }
//     }
// }
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// compararCalificaciones(asiaScores,euroScores);
let arregloInverso = [];
function arrayInverso(array){
    for(let i = asiaScores.length -1 ; i >=0 ; i-- ){
        arregloInverso.push(asiaScores[i]);
    }
}
arrayInverso(asiaScores);

console.log(arregloInverso );

//suma arrays
let suma = 0;
function sumaArreglo(array){
    for(let i = 0 ; i< array.length ; i++){
         suma += array[i];

    }
    console.log(suma);
}

sumaArreglo([2,3,4]);

//Array.Join()
let arreglo = ["h","o","l","a"];
let union= "";
function join(array){
    for(let i = 0 ; i< array.length ; i++){
     union += array[i];
    }
    console.log(union);
}

join(arreglo);

