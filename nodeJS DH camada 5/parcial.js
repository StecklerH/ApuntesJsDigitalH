//Ejercicio 1:

//Objetos Dentro de Arreglos

/* 
Supongamos que tenemos un Arreglo llamado autos que tiene dos Objetos (un auto marca "Citroen" y otro marca "Honda").
*/

// let autos = [
//   {
//     marca: "Citroen",
//     modelo: "C3",
//     año: 2013,
//     dueño: "Juan",
//     color: {
//       capot: "gris",
//       puertas: "negro",
//     },
//     dueñosAnteriores: [], // Lo compro 0KM
//   },
//   {
//     marca: "Honda",
//     modelo: "Fit",
//     año: 2016,
//     dueño: "Santiago",
//     color: {
//       capot: "rojo",
//       puertas: "rojo",
//     },
//     dueñosAnteriores: ["Jorge", "Iván"],
//   },
// ];

// /*
// Santiago le compra el auto a Juan y le pinta el capot a negro.
// ¿Cómo harías para modificar esas Propiedades?
// */


  // function nuevoComprador(array,nombre,color){
  //   autos[0].dueñosAnteriores.push(autos[0].dueño);
  //   autos[0].dueño = nombre;
  //   autos[0].color.capot = color
    
  //   return autos
  // }
  // console.log(nuevoComprador(autos,"santiago","negro"))




//PREGUNTAS - (solo enviar la opcion que para ustedes es correcta)

/* 
A)
Utilizamos pop() para ...

// - Ingresar un elemento en la última posición del array
// - Eliminar un elemento ubicado en la primera posición del array
// - Ingresar un elemento en la primera posición del array
// - Eliminar un elemento ubicado en la última posición del array  Respuesta

// /*
// B) 
// Para encontrar la posición de un elemento dentro de un array, ¿cuál es la instrucción correcta?

// - ["a", "b", "c", "d"].indexOf("c") respuesta
// - ["a", "b", "c", "d"].getItem("c")
// - ["a", "b", "c", "d"].positionOf("c")
// - ["a", "b", "c", "d"].get("c")
// */

// /*
// C) 
// ¿A qué valor estamos accediendo?

// let miArray = ["Ana", "Pedro", "Pablo"]
// miArray[miarray.lenth - 1]

// - Ana
// - Pedro
// - Pablo respuesta
// - undefined

// */

// /*
// D) 
// ¿Cuál o cuales son las formas correctas de agregarle un nuevo dato a un objeto llamado persona?

// - persona."edad" = 25
// - persona['edad'] = 25
// - persona.edad = 25 respuesta correcta
// - "persona".edad = 25

// */

// /*
// E) 
// ¿Qué se termina mostrando?

// let perro = {
//     nombre: "Charly",
//     edad: 6
// }
// let key = "nombre"
// console.log(perro[key])

// - 0
// - key
// - nombre
// - Charly respuesta
// */

// /*
// F) 
// ¿Qué se termina mostrando?

// let musicos = [
//     {
//         nombre: "Luca Prodan",
//         idiomas: ["Ingles", "Español"]
//     },
//     {
//         nombre: "Luis A. Spinetta",
//         idiomas: ["Español"]
//     }
// ]
// console.log(musicos[1].idiomas[0])

// - undefined
// - Español respuesta correcta
// - Inglés
// - Luca Prodan
// */


// //Ejercicio 2: 

// // Una funcion multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.
// function multiplicador(a,b){
//   return a*b
// }

// console.log(multiplicador(2,2))

// // Una funcion resta que tome dos números como Parámetros y devuelva el la resta de los dos.

// function resta(a,b){
//   return a-b
// }

// console.log(resta(1,3))

// // Una funcion sumador que tome 4 numeros como parametros y te devuelva la suma de los 4. 

// function sumador(a,b,c,d){
//   return a+b+c+d
// }

// console.log(sumador(2,2,2,2))

// //Ejercicio 3: 

// // Giannina necesita necesita comprar todo lo necesario para poder cocinar unas pizzas:

// let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]


// // - Agregá dos nuevos productos al final de la lista(lo que le quieras poner a tu pizza).

// pizzas.push("panceta","anchoas")

// // console.log(pizzas)

// // - Agregá dos productos al principio de tu lista(lo que le faltaria para la salsa).

// pizzas.unshift("aceitunas","morron")

// // console.log(pizzas)
// // - Determiná cuán largo es el Arreglo en este momento.

// console.log(pizzas.length)

// // - Sacá un producto y guardalo en una Variable que se llame noHabia.

// let nohabia = pizzas.shift()
// console.log(pizzas + " no hay " + nohabia)
// // - Sacá un producto y guardalo en otra Variable que se llame comprado.

// let comprado = pizzas.pop()
// console.log(pizzas + " fue comprado " + comprado)
// - ¿Cuán largo es el Arreglo ahora?




//Crear un array VACÍO, que tenga el nombre de autos. 



// Usando estos 3 Objetos

let ford = {
    año	 : 2015,
    color	: "blanco",
    puertas: 5
}
   
let peugeot = {
año	 : 2010,
color	: "rojo",
puertas: 3
}
   
let volkswagen = {
año	 : 2012,
color	: "gris",
puertas: 4
}

ford.marca = ("ford")
peugeot.marca = ("peugeot")
volkswagen.marca = ("volkswagen")
// console.log(ford)
let autos = [];

autos.push(ford,peugeot,volkswagen)


// console.log(autos)
// }
// function agregarAutos(objeto){
    
//     autos.push(ford)
//     autos.push(peugeot)
//     autos.push(volkswagen)
  
//   return autos
// }

// console.log(agregarAutos(autos))


function incrementarPuertasFuturo(array){
 
    for(let i=0 ; i<array.length ; i++){
      array[i].puertas +=3
    }
  return array
}

console.log(incrementarPuertasFuturo(autos))

//Estos 3 objetos, ahora tenes que pensar como podrias agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)


// Mostrar por consola el array para ver que contenga esos objetos.


   

/* Tenes que crear una función que reciba el array autos como unico parámetro, e incremente en 3 la cantidad de puertas que van a tener los autos en el futuro con una modificacion, llámala futurosAutos. Debes utilizar una estructura de repetición. */
