/* ----------------------------------------------------------------------------------- */

//Ejercicio 1:
/* 
Crear una matriz de 4 x 2
Crear una función que sume todos los valores de la fila 2
Crear una función que sume todos los valores de la columna 1 que sean múltiplos de 3
Crear una función que guarde todos los valores pares de la matriz en un array y todos los impares en otro
*/


function crearMatriz(matriz) {
  // let matriz = []
  for (let i = 0; i < 4; i++) {
    matriz[i] = [i]
    for (let j = 0; j < 2; j++) {
      matriz[i][j] = Math.ceil(Math.random() * 20)
    }
  }
  return matriz
}

// console.log(crearMatriz(matriz))
let matriz = [
  [1, 2],
  [3, 4],
  [6, 6],
  [3, 8]
]



function sumarMatrizMultiplo3(matriz) {
  let suma = 0
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 1; j < matriz[i].length; j++) {
      if (matriz[i][1] % 3 === 0) {
        suma += matriz[i][1]
      }
    }
  }
  return suma
}

console.log(sumarMatrizMultiplo3(matriz))

// function sumarMatriz(matriz) {
//   let suma = 0
//   for (let i = 0; i < matriz[2].length; i++) {
//     suma += matriz[2][i]
//   }
//   return suma
// }

// console.log(sumarMatriz(matriz))


// function sumaMultiplos3(matriz) {
//   let suma = 0
//   for (let i = 0; i < matriz.length; i++) {
//       if (matriz[i][0] % 3 == 0) {
//         suma += matriz[i][0]
//       }
//   }
//   return suma
// }

// console.log(sumaMultiplos3(matriz))



function paresImpares(matriz) {
  let pares = []
  let impares = []
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 == 0) {
        pares.push(matriz[i][j])
      } else {
        impares.push(matriz[i][j])
      }
    }
  }
  console.log(pares)
  console.log(impares)
}


// paresImpares(matriz)
//Ejercicio 2:
/* 
Desarrollar una función que reciba por parámetro él array de cervezas y ordene de forma ascendente según su ibu
Desarrollar una función que reciba por parámetro él array de cervezas y ordene de forma descendente según su nombre
*/

let cervezas = [
  {
    nombre: "ipa",
    ibu: 40,
    aroma: "intensa",
    artesanal: true,
  },
  {
    nombre: "golden",
    ibu: 28,
    aroma: "ligero",
    artesanal: false,
  },
  {
    nombre: "amber",
    ibu: 15,
    aroma: "frutada",
    artesanal: true,
  },
  {
    nombre: "scotish",
    ibu: 30,
    aroma: "suave",
    artesanal: true,
  },
];


function ascendente(objeto) {
  let temp = {}
  for (let i = 0; i < objeto.length; i++) {
    for (let j = 0; j < objeto.length - 1; j++) {
      if (objeto[j].ibu < objeto[j + 1].ibu) {
        temp = objeto[j]
        objeto[j] = objeto[j + 1]
        objeto[j + 1] = temp
      }

    }

  }
}

// ascendente(cervezas)

function descendente(objeto) {
  for (let i = 0; i < objeto.length; i++) {
    for (let j = 0; j < objeto.length - 1; j++) {
      if (objeto[j].nombre > objeto[j + 1].nombre) {
        let temp = objeto[j]
        objeto[j] = objeto[j + 1]
        objeto[j + 1] = temp
      }
    }
  }
  return objeto
}

// console.log(descendente(cervezas))


//Ejercicio 3:
/* Nuevo Arreglo
    Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. 
    Ejemplo: 
    nuevoArreglo(5) debe retornar [1,2,3,4,5] 
    nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
     */

//para completar

function nuevoArreglo(number) {
  let newArray = [];
  for (let i = 1; i <= number; i++) {
    newArray.push(i)
  }
  return newArray;
}

// console.log(nuevoArreglo(10))
/* 
  - newArray[i] = i + 1; 
  - newArray.splice(i);
  - newArray.push(i); esta
  - newArray(i) = i + 1;
   */

/* Sumatoria
    Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. 
    Ejemplo: 
    sumattion(3) debe retornar 6 por que hace (1 +2 +3) 
    sumattion(8) debe retornar 36
     */

//para completar

function sumattion(number) {
  let sum = number;
  for (let i = 0; i < number; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sumattion(8))
/*
    -  for (let element in number){}
    -  for (let i = 1; i > number; i++){}
    -  for (let i = 0; i < number; i++){} esta
    -  for(let j = 0 ; i < number.length; i++){}
    */

//Ejercicio 4:
/* Arreglo de objetos
  Debés crear una función llamada `arregloDeObjetos` que reciba un número como
  parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor`
  que contenga el valor del número y sus anteriores.
  Ejemplo:
  - arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4},
  {valor: 5}]
  - arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]*/

function arregloDeObjetos(num) {
  let arreglo = []
  for (let i = 0; i <= num; i++) {

    arreglo[i] = { valor: i }

  }

  return arreglo
}

// console.log(arregloDeObjetos(5))