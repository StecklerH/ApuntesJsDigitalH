// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 
// mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por 
// parámetro sea par, mostrará en la consola: “El número X es par”.

// function loopDePares(num) {

//     for (let i = 0; i <= 10; i++) {

//         if ((num + i) % 2 == 0) {
//             console.log("El número " + (num + i) + " es par")
//         } else {
//             console.log("El número " + (num + i) + " es impar")
//         }
//     }
// }

// loopDePares(3);

// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una 
//palabra, y haga un loop de 0 a 100 
// mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso 
//de que ese número sumado con el número 
// pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

// function loopDeImpares(num,string){
//     for(let i=0; i<=10; i++){
//        if((num+i)%2 !== 0){
//            console.log(string + " " + (num+i))
//        }
//     }
// }

// loopDeImpares(3,"Impar");

// Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y 
//que devuelva la sumatoria de todos sus números anteriores, 
// incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36


// function sumatoria(num){
//     let suma = 0;
//     for(let i=0;i<=num ; i++){
//         suma = suma + i;

//     } 

//     return suma;
// }

// console.log(sumatoria(8));

// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro 
// y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. 
// Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

// function nuevoArreglo(num) {
//     let array = [];
//     for (let i = 1; i <= num; i++) {
//         array.push(i);
//     }

//     return array;
// }

// console.log(nuevoArreglo(10));

// Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el 
// comportamiento de la función original. Si no estás seguro de cómo funciona, 
// Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

// function split(string){
//     let array = [];
//     for(let i = 0; i<string.length;i++){
//         array.push(string[i])
//     }
//     return array;
// }

// console.log(split("chau"));

// Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de 
// igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo 
// soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

// let arreglo1 = [1, 2, 3, 4];
// let arreglo2 = ["h", "o", "l", "a"];
// function arrayHandler(array1, array2) {
//     for (let i = 0; i < arreglo1.length; i++) {
//         console.log("Soy " + array1[i] + " y yo soy " + array2[i]);
//     }

// }

// arrayHandler(arreglo1, arreglo2);

// Palíndromo
// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. 
// Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

// function palindromo(string){    
//     let reverso = "";
//     for(let i=string.length -1; i>=0;i--){ 
//         reverso = reverso + string[i]
//     }  

//     return reverso === string
// }

// console.log(palindromo("ana"));


// let nombre = "hugo";
// let variable = "";
// let reverso = [];
// for(let i = nombre.length ; i>=0 ; i--){
//      reverso = nombre[i];
// }
// console.log(variable);


//Palindromo
// function palindromo(palabra){
//     let largoPalabra = palabra.length - 1;
//     for (let i = 0; i < palabra.length; i++){
//         if(largoPalabra > i){
//             if (palabra[largoPalabra] !== palabra[i]){
//                 return console.log('No es un palindromo')
//             }
//         }
//       largoPalabra--
//     }
//   return console.log('Es un palindromo')
// }

// palindromo("hola");



// - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , 
//   luego desarrollar las siguientes funciones:
let arreglo1 = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];
let arreglo2 = [22, 55, 80];
let arreglo3 = [5, 63, 29];
// 1 - Funcion que reciba un array de edades y retorne el promedio 

function promedio(array) {
    let sumatoria = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        sumatoria = sumatoria + array[i];
    }

    return sumatoria / array.length
}

console.log(promedio(arreglo1));

// 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
// let edades = [1, 1, 10];

// function mayorElemento(array){
//     let mayor = 0 ;
//     for(let i=0 ; i<= array.length -1 ; i++){
//         if(array[i]> mayor){
//             mayor = array[i];
//         }    
//     }
//     return mayor;
// }

// console.log(mayorElemento(edades))
// 3 - Funcion que reciba un array de edades y retorne el menor elemento // 

// function menorElemento(array){
//     let elementomenor = array[0] ;
//     for(let i=0 ; i<= array.length -1 ; i++){
//         if(array[i]< elementomenor){
//             elementomenor = array[i];
//         }    
//     }
//     return elementomenor;
// }

// console.log(menorElemento(edades))

// 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
let edades = [4, 2, 3];
// function elementosRepetidos(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] == array[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(elementosRepetidos(edades));
// 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario

// function buscadorEdades(array,edad){
//     for(let i=0 ; i<array.length;i++){
//         if(edad == array[i]){
//             return array[0]
//         }
//     }
//     return null
// }

// console.log(buscadorEdades(edades,3))
// 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",
//       edadesMayor : "// edades menor a 18"
//    }
// nota : Se recomienda utilizar estructuras y conceptos vistos en la materia, pueden resolver con metodos pero tambien de forma imperativa (for if)
let e = [15, 16, 17, 18, 19, 20, 21, 22, 23]

function constructor(array) {
    let objeto = {
        edadesMenor: [],
        edadesMayor: []
    };

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 18) {

            objeto.edadesMenor.push(array[i])
        } else {

            objeto.edadesMayor.push(array[i])
        }
    }

    return objeto
}

console.log(constructor(e));

// Les dejo un ejercicio de objetos para que puedan practicar y lo vemos hoy por la noche!

// Parte 1: Crear Mi Objeto

// Crea un Objeto nave con las siguientes Propiedades y Valores:
// Tipo de nave: Un String que diga "Espacial".
// País: Un String que indique de qué país es la nave.
// Cantidad de tripulantes: Un número que indique la cantidad de tripulantes de la nave.
// Tripulantes: Un Arreglo con los nombres de los tripulantes.
// País de los tripulantes: Un arreglo con nombres de los países de los tripulantes
// Estado: Un String que diga "Usada".

// Despegar:
// a) Una Función que imprima en la consola el siguiente mensaje:
// " ¡Todo listo para el despegue!

//  ¡algo se rompió!"
// b) Y tire un Alert(ver que es un alert, si no lo conocen) que diga:
// ¡BOOOM!
// [11:46]
// Parte 2: Acceso A Los Valores
// Ahora desde la consola o su VSC seguí este paso a paso para extraer los valores del Objeto nave:

// Extraé el país de la nave usando Dot notation.
// Extraé el tipo de nave usando Bracket notation.
// Extraé la cantidad de tripulantes usando Dot notation... ¿se puede?(pensar porque y dejar un comentario explicándolo)


