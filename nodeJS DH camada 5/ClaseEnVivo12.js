//ejercicio 1
let arreglo = [];
// function nuevoArreglo(num){
//     for(let i = 1 ; i<= num ; i++){
//         arreglo.unshift(i);
//     }
// }
// nuevoArreglo(5);
// console.log(arreglo);

//ejercicio 2

// function sumador(num1,num2,num3){
//     for(let i=num1; i<=num2; i += num3){
//         arreglo.push(i);
//     }
// }

// sumador(1,10,3);
// console.log(arreglo);

function sumador(num1,num2,num3){
    let i = num1;
    while(i<=num2){
        arreglo.push(i);
        i+=num3;
    }
}

sumador(1,10,3);
console.log(arreglo);

/* 
5 - 

Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como
parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor`
que contenga el valor del número y sus anteriores.
Ejemplo:
- arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4},
{valor: 5}]
- arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]*/
// let objetos = {};
// function arregloObjetos(num){
//         for(let i = 1 ; i<=num ; i++){
//             objetos = {valor: i};
//         }
// }

// arregloObjetos(5);

// console.log(objetos);

function arregloDeObjetos (num){

    let array = []; 
    for(let i=1 ; i<=num ; i ++) {

        let objeto = {valor: i}; 
        array.push(objeto); 

    }
    return array; 

}

console.log(arregloDeObjetos(5));


// function encontrarGanador(array1, array2) {
//     let puntosAlicia = 0;
//     let puntosBob = 0;
//     for (let i = 0; i < 3; i++) {
//         if (array1[i] > array2[i]) {
//             puntosAlicia++;
//             console.log("Punto para alicia, lleva un total de: " + puntosAlicia + " puntos")
//         } else if (array1[i] === array2[i]) {
//             console.log("empate, ningun participante gana puntos");
//         } else {
//             puntosBob++;
//             console.log("Punto para Bob, lleva un total de: " + puntosBob + " puntos")
//         }
//     }

//     if (puntosAlicia > puntosBob) {
//         console.log("el ganador es Alicia con: " + puntosAlicia + " puntos")
//     } else if (puntosAlicia < puntosBob) {
//         console.log("el ganador es Bob con: " + puntosBob + " puntos")
//     } else {
//         console.log("Ambos participantes quedaron empatados")
//     }
// }
