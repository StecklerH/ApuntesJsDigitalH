// // let matriz10X10 = [];

// // function crearMatriz(matriz) {
// //   let sum = 0
// //   for (let i = 0; i < 10; i++) {
// //     matriz[i] = []

// //     for (let j = 0; j < 10; j++) {
// //       sum++
// //       matriz[i][j] = sum

// //     }

// //   }

// //   return matriz

// // }

// // // console.log(crearMatriz(matriz10X10))

// // // {
// // //  i [j]
// // //  i [j]
// // //  i [j]
// // // }

// // function diagonalRoja(matriz) {
// //   let sumatoria = 0
// //   for (let i = 0; i < 10; i++) {
// //     for (let j = 0; j < 10; j++) {
// //       if (matriz[i] == matriz[j])
// //         // sumatoria +=matriz[i][j]
// //         // sumatoria.push(matriz[i][j])
// //         console.log(matriz[i][j])
// //     }
// //   }

// //   // return sumatoria
// // }

// // // diagonalRoja(crearMatriz(matriz10X10))
// // // console.log(diagonalRoja(crearMatriz(matriz10X10)))
// // // // // Por último, vamos a generar dos funciones:
// // // // // a) Una va a sumar los valores en la diagonal marcada en rojo.
// // // // // b) La otra va a marcar los valores de la diagonal marcada en verde.
// // // // // Ambas funciones deben devolver un resultado único.

// // function diagonalVerde(matriz) {
// //   let sumatoria = []
// //   let j = 9
// //   for (let i = 0; i < 10; i++) {

// //     sumatoria += matriz[i][j]
// //     // sumatoria.push(matriz[i][j]) //esto sirve para comprobar que resultados trae la matriz
// //     j--

// //   }

// //   return sumatoria
// // }
// // // console.log(diagonalRoja(crearMatriz(matriz10X10)))
// // console.log(diagonalVerde(crearMatriz(matriz10X10)))




// let numeros = [
//   [10, 3, 2, 1, 4, 7],
//   [5, 5, 10, 100, 4],
//   [5, 125, 10, 1020, 4],
//   [5, 5, 5097, 100, 4]
// ];

// // /**
// //  * Suma los valores que sean mayores
// //  * o iguales a 10, pero menor a 1000.
// //  */


// // function sumar(matriz) {
// //   let sumatoria = 0;
// //   for (let i = 0; i < matriz.length; i++) {
// //     for (let j = 0; j < matriz.length; j++) {
// //       if (matriz[i][j] >= 10 && matriz[i][j] < 1000) {

// //         sumatoria += matriz[i][j]

// //       }
// //     }
// //   }
// //   return sumatoria
// // }

// // console.log(sumar(numeros))

// function recorrer(matris) {
//   // let contador = 0;
//   let suma = 0;
//   for (let i = 0; i < matris.length; i++) {
//     for (let j = 0; j < matris[i].length; j++) {
//       if (matris[i][j] >= 10 && matris[i][j] < 1000) {
//         suma += matris[i][j];
//       }
//     }  
//   }
//   return suma;
// }
// console.log(recorrer(numeros));



// // function diagonal_verde(matrix) {
// //   let sum = 0;
// //   for (let i = 0; i < 10; i++) {

// //     for (let j = 9; j >= 0; j--) {

// //       if (j == 9 - i) {
// //         sum += matrix[i][j];
// //         console.log(matrix[i][j])
// //       }
// //     }
// //   }
// //   return sum
// // }
// // console.log('Resultado Diagonal Verde :' + diagonal_verde(crearMatriz(matriz10X10)));

// // Ejercicio
// // Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
// // La idea es solo registrar el total de los gastos, al finalizar la jornada.
// // Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// // Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. 
// // a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
// // b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// // c) Por último, es necesario tener el total de gastos realizados en el mes.
// // Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
// // Opcional
// // d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
// // Posibles matrices para comprobar los resultados. 


// let gastos = [1135, 2500, 900, 1600, 2800, 3650, 1100, 1750, 1890, 1900, 1300, 898,
//   1750, 2800, 1700, 1150, 1690, 1900, 1770, 4500, 2560, 800, 1250, 1430, 2100, 1980, 1270, 950];
// function controlGastos(array) {
//   let gastosMes = []
//   let contadorDias = 0
//   for (let i = 0; i < 4; i++) {
//     gastosMes[i] = []
//     // gastosMes.push( "semana " + (i+1))
//     for (let j = 0; j < 7; j++) {
//       gastosMes[i][j] = array[contadorDias]
//       contadorDias ++
//     }
//   }
//   return gastosMes
// }

// console.table(controlGastos(gastos))




// function controlGastos(array) {
//   let gastosMes = []
//   let contadordias = 0
//   for (let i = 0; i < 4; i++) {
//     gastosMes[i] = []
//     for (let j = 0; j < 7; j++) {

//       gastosMes[i][j] = array[contadordias]
//       contadordias++
//     }
//   }

//   return gastosMes
// }

// console.table(controlGastos(gastos))

// a)  Lo que nos solicitan es dar el total de gastos en una semana.
//  Recordemos que cada fila representa una semana, es decir, 
//  si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices 
// comienzan siempre en posición 0. 

// function gastoSemanal(matriz, semana) {
//   let sumaGastoSemanal = 0
//   for (let i = 0; i < matriz[semana].length; i++) {
//     sumaGastoSemanal += matriz[semana][i]
//   }

//   return sumaGastoSemanal
// }

// function gastoDelDia(matriz, dia) {
//   let arregloMes = []

//   for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//       arregloCompleto.push(matriz[i][j])
//     }
//   }



//   return arregloMes[dia - 1]
// }
// // [
// //   [1,2,3,4]
// //   [1,2,3,4]
// // ]
// console.log(gastoDelDia(controlGastos(gastos),14))

// function gastoDelDia(matriz, dia) {
//   let cont = 0
//   let gasto = 0

//   for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//       cont ++
//       if(cont == dia){
//         gasto = matriz[i][j]
// //       }
// //     }
// //   }



// //   return gasto
// // }

// // console.log(gastoDelDia(controlGastos(gastos),20))




// // // c) Por último, es necesario tener el total de gastos realizados en el mes.
// // // Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?

// // // function gastoDelMes(matriz) {
// // //   let sumatoria = 0
// // //   for (let i = 0; i < matriz.length; i++) {
// // //     for (let j = 0; j < matriz[i].length; j++) {
// // //       sumatoria += matriz[i][j]
// // //     }
// // //   }

// // //   return sumatoria
// // // }

// // // console.log(gastoDelMes(gastos))

// // Considera una lista / array de ovejas.Cada oveja tiene un nombre y un color.Haz una función que devuelva una lista con todas las ovejas que sean de color rojo 
// // y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.


// // const ovejas = [
// //   { name: 'Noa', color: 'azul' },
// //   { name: 'Euge', color: 'rojo' },
// //   { name: 'Navidad', color: 'rojo' },
// //   { name: 'Ki Na Ma', color: 'rojo' },
// //   { name: 'AAAAAaaaaa', color: 'rojo' },
// //   { name: 'Nnnnnnnn', color: 'rojo' }
// // ]

// // // console.log(ovejas[1].color)
// // function contadorOvejas(array) {
// //   let filtrado = []
// //   let filtradoLetras = []
// //   for (let i = 0; i < array.length; i++) {
// //     if ( array[i].color === 'rojo' && array[i].name[i].search('n') && array[i].name[i].search('a')) {
// //       filtrado.push(array[i])
// //     }
// //   }
// // for(let i=0 ; i<filtrado.length ; i++){
// //  if(filtrado[i].name[i] == 'n' && filtrado[i].name[i] == 'a'){
// //     filtradoLetras.push(filtrado[i])
// //  }
// //   // }
// //   return filtrado
// // }

// // console.log(contadorOvejas(ovejas))


// // console.log(ovejas[1].name[2])

// /**
//  * Declara una variable que contenga una matriz
//  * de 5x5 llena de puros numeros enteros y positivos
//  */

// /**
//  * Luego, escribe un algoritmo para sumar todos
//  * los numeros en la matriz.
//  */


// let matriz = []
// function crearMatriz(array) {

//   for (let i = 0; i < 5; i++) {
//       array[i] = []
//     for(let j = 0 ; j < 5 ; j++){
//        array[i][j] = Math.ceil(Math.random()*100)
//     }
//   }

//   return array

// }

// function sumarMatriz(matriz){
//   let sumatoria = 0
//   for(let i = 0 ; i< matriz.length ; i++){
//     for(let j= 0 ; j < matriz[i].length ; j++){
//         sumatoria += matriz[i][j]
//     }
//   }

//   return sumatoria
// }

// console.log(crearMatriz(matriz))
// console.log(sumarMatriz(matriz))

// Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:

// let matriz = []
// function generarMatriz(array){
//   let temp = 1
//   for(let i = 0 ; i< 10 ; i++){
//       array[i] = []
//       for(let j=0 ; j < 10 ; j++){

//         array[i][j] = temp
//         temp ++
//       }
//   }
//   return array
// }

// console.log(generarMatriz(matriz))





// let personas = [
//   {
//     nombre: "Dua",
//     apellido: "Lipa",
//     ocupacion: "cantante",
//     estatura: 173
//   },
//   {
//     nombre: "Ariana",
//     apellido: "Grande",
//     ocupacion: "cantante",
//     estatura: 160
//   },
//   {
//     nombre: "Taylor",
//     apellido: "Swift",
//     ocupacion: "cantante",
//     estatura: 180
//   }
// ];

// function ordenar(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//       if (array[j].estatura > array[j + 1].estatura) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

// console.log(ordenar(personas));


//EJERCICIO 3 
// 1-Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones. 
// 2-Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3.  
// 3-Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par. 
// 4-Crear una función que retorne la suma de las diagonales de la matriz.


// let matriz = [
//   [1, 2, 3],
//   [1, 2, 3],
//   [1, 2, 3]
// ]

let matriz = []

function crearMatriz(matriz) {

  for (let i = 0; i < 3; i++) {
    matriz[i] = []
    for (let j = 0; j < 3; j++) {
      matriz[i][j] = Math.ceil(Math.random() * 100)
    }
  }

  return matriz

}

console.log(crearMatriz(matriz))
// {
//   [1, 2, 3]
//   [1, 2, 3]
//   [1, 2, 3]
// }

function sumatoria(matriz) {
  let sum = 0
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        sum += matriz[i][j]
    }
  }

  if(sum%2 == 0){
    return ("es un numero par" + sum)
  }else {
    return ("no es numero par" + sum)
  }
 

}
// console.log(crearMatriz(matriz))
// console.log(sumatoria(crearMatriz(matriz)))

// console.log(sumatoria(matriz))

function sumaDiagonal(matriz){
  let sum = 0
  for(let i = 0; i<matriz.length ; i++){
    for(let j =0 ; j<matriz[i].length ; j++){
      if(matriz[i] == matriz[j]){
        sum += matriz[i][j]
      }
    }
  }
  return sum
}

// console.log(sumaDiagonal(matriz))

function otradiagonal(matriz){
  let sum = 0
  let j = 2

  for(i = 0 ; i < matriz.length ; i++){
    sum += matriz[i][j]
    j--
  }

  return sum
}

// console.log(otradiagonal(matriz))