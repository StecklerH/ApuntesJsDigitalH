// // // Ejercicio 1: 
// // // Desarrollar una función para cada uno de las siguientes apartados: 
// // // Que reciba por parámetro un número entero y retorne su doble.
// // // Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
// // // Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos. 

// function enteroAdouble(num) {
//     return parseFloat(num);
// }

// function multiplicacion(num, num1) {
//     return num * num1;
// }

// function division(num, num1) {
//     if (num !== 0 && num1 !== 0) {
//         return num / num1
//     } else {
//         return "no se puede dividir entre 0"
//     }

// }

// // // Ejercicio 2:
// // //  Deberás escribir un objeto literal llamado ciclista que contenga las siguientes propiedades que 
// // //deberás completar con tus datos:
// // // nombre
// // // apellido 
// // // edad
// // // tiene Bici (TRUE/FALSE)

// let ciclista = {
//     nombre: "Hugo",
//     apellido: "Steckler",
//     edad: 30,
//     tieneBici: false

// }
// // // 2. Teniendo en cuenta los datos del punto número 1.
// // // Crear una función que reciba por parámetro el objeto y retorne un string en base a las siguientes condiciones : 
// // // si edad es mayor o igual a 18 y tiene bici  “puede competir”
// // //  si tiene bici y es menor a 18   “podrá competir pero con un adulto acompañante”
// // //  si no tiene bici “No podrá competir ” 

// function competencia(array) {
//     if (array.edad >= 18 && array.tieneBici == true) {
//         return "puede competir"
//     } else if (array.edad < 18 && array.tieneBici == true) {
//         return "podrá competir pero con un adulto acompañante"
//     } else {
//         return "No podra competir"
//     }
// }
// // // *Deberás realizar la invocación de la función de forma que se pueda ver el resultado 

// console.log(competencia(ciclista))

// // Ejercicio 3:
// //  Crear un array VACÍO llamado competidores. 
// // Dados estos tres objetos	
// let competidor1 = {
//     nombre: 'Juan',
//     edad: 42,
//     kilometrosRecorridos: 80,
// }
// let competidor2 = {
//     nombre: 'Sofia',
//     edad: 22,
//     kilometrosRecorridos: 90
// }
// let competidor3 = {
//     nombre: 'Maria',
//     edad: 45,
//     kilometrosRecorridos: 70
// }

// let competidores = [];

// // Agregarlos al array. (utilizando un método JS, pensa cual podrías utilizar)

// competidores.push(competidor1, competidor2, competidor3)

// // Mostrar por consola el array para ver que contenga esos objetos.
// console.log(competidores)

// // Crea una función que reciba el array competidores como parámetro, e incremente en 100 la cantidad de kilómetros recorridos de cada uno de los competidores, llámala competencia100Km .
// // * Debes utilizar alguna estructura de repetición vista en la materia.
// function competencia100Km(array) {

//     for (let i = 0; i < array.length; i++) {

//         array[i].kilometrosRecorridos += 100;
//     }

//     return array
// }


// console.log(competencia100Km(competidores))

//  Mostrar por consola el array de competidores antes y después de la ejecución de la función.


let brasil = {
    cantidadDeVisitas : 3,
    clima: "soleado",
    habitantes: "212 millones"
   }
   let rusia = {
    cantidadDeVisitas : 4,
    clima: "frío",
    habitantes: "144 millones"
   }
   let estadosUnidos = {
    cantidadDeVisitas : 1,
    clima: "nublado",
    habitantes: "329 millones"
   }
  
  let destinos = [];

  destinos.push(brasil, rusia, estadosUnidos)

  console.log(destinos);


function siguienteViaje(array) {
    for (let i = 0; i < array.length; i++) {

        array[i].cantidadDeVisitas++;
    }
    return array
}
console.log(siguienteViaje(destinos));