// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// let twoSum = function(nums, target) {
//     let number = []
//     for(let i = 0 ; i<nums.length ; i++){
//         for(let j = 0 ; i< nums.length ; j++){
//             if(nums[i] + nums[j] == target && nums[i] !== nums[j]){

//                 return number = [i,j]
//             }
//         }
//     }
// };


// twoSum([3,2,4],6)



// function reverso(string){
//     let inverso = "";
//     for(let i=string.length - 1;i>=0 ; i--){
//         inverso += string[i]
//     }

//     if(string == inverso){
//         return "es palindromo"
//     }else{
//         return " no lo es"
//     }

// }


// console.log(reverso("121"))




// Dado los siguientes numeros:

// let num1 = 1;
// let num2 = 199;
// let num3 = 6;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

// function identificarNumeroMayor(a, b, c,d) {
//     if (a > b && a > c && a>d) {
//         console.log(a);
//     } else if (b > a && b > c && b>d) {
//         console.log(b);
//     } else if(c > a && c > c && c>d){
//         console.log(c);
//     }else {
//         console.log(d)
//     }
// }

// identificarNumeroMayor(num1, num2, num3,num4);





// Ahora bien. dado los siguientes numeros:

// let num1 = 13;
// let num2 = 1663;
// let num3 = 3363;
// agrega una variable mas, llamada num4
// con un valor numerico

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.

// Escribe tu código debajo de esta linea,
// y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros
// para ver que algoritmo funciona con cualquier
// conjunto de 4 numeros.



/**
 * Extra: que puedes hacer para identificar
 * el numero mayor de una lista de numeros,
 * como la siguiente? Utiliza Javascript.
 *
 * Tip: es valido buscar en google :)
 *
 * Adicional: al terminar tu algoritmo,
 * cambia los valores de la lista, bien sea
 * agregando o removiendo, y asegurate
 * que tu algoritmo funcione con cualquier lista
 * de numeros
 */
//  6,23,33,100

//  let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
//  function imprimeRepetidos(array) {
//     let arregloNuevo = [];
//    for (let i = 0; i < array.length; i++) {
//      for (let j = 1; j < array.length; j++) {
//        if (array[i] == array[j+i]) {
//           arregloNuevo.push(array[i]) 
//        }
//      }
//    }
//    return arregloNuevo
//  }
//  console.log(imprimeRepetidos(array))



// let matrix5X5 = [];

// function crearMatrix(matrix) {
//   for (let i = 0; i < 5; i++) {
//     matrix[i] = [i];
//     for (let j = 0; j < 5; j++) {
//       matrix[i][j] = Math.ceil(Math.random()*100);
//     }
//   }
//   return matrix;
// }

// console.log(crearMatrix(matrix5X5));

// for (let elemento in matrix5X5) {
//   console.log(elemento + " = " + matrix5X5[elemento]);
// }


// let matriz10X10 = [];

// function crearMatriz(matriz) {
//   let sum = 0
//   for (let i = 0; i < 10; i++) {
//     matriz[i] = [i]

//     for (let j = 0; j < 10; j++) {
//       sum++
//       matriz[i][j] = sum

//     }

//   }

//   return matriz

// }

// console.log(crearMatriz(matriz10X10))



// function diagonalRoja(matriz){
//   let sumatoria = 0
//   for(let i=0 ; i<10 ; i++){
//     for(let j =0 ; j < 10 ; j++){
//       if(matriz[i] == matriz[j])
//         sumatoria +=matriz[i][j]
//         // sumatoria.push(matriz[i][j])
//     }
//   }

//   return sumatoria
// }


// console.log(diagonalRoja(crearMatriz(matriz10X10)))
// // // Por último, vamos a generar dos funciones:
// // // a) Una va a sumar los valores en la diagonal marcada en rojo.
// // // b) La otra va a marcar los valores de la diagonal marcada en verde.
// // // Ambas funciones deben devolver un resultado único.

// function diagonalVerde(matriz) {
//   let sumatoria = []
//   let j = 9
//   for (let i = 0; i < 10; i++) {

//     // sumatoria += matriz[i][j]
//     sumatoria.push(matriz[i][j])
    
//     j--
    
//   }

//   return sumatoria
// }


// // console.log(diagonalRoja(crearMatrix(matrix10X10)))
// console.log(diagonalVerde(crearMatriz(matriz10X10)))