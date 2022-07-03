// // Ejercicios
// // A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

// // const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


// // Obtener en un nuevo array las edades menores a 18.
// // Obtener en un nuevo array las edades mayor o igual a 18.
// // Obtener en un nuevo array las edades igual a 18.
// // Obtener el menor.
// // Obtener el mayor. 
// // Obtener el promedio de edades.
// // Incrementar en 1 todas las edades.

// const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
// const edadesGrupo1 = [21, 12, 15, 18, 25];
// const edadesGrupo2 = [2, 11, 54, 63, 24];

// function nuevoArreglo(array) {
//     let menores18 = []
//     let mayores18 = []
//     let iguales18 = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 18) {
//             menores18.push(array[i])
//         } else if (array[i] > 18) {
//             mayores18.push(array[i])
//         } else {
//             iguales18.push(array[i])
//         }
//     }

//     return "los menores a 18 son: " + menores18.length + " los mayores a 18 son: " + mayores18.length + " los iguales a 18 son: " + iguales18.length;
// }

// console.log(nuevoArreglo(edades))

// function obtenerMenor(array) {
//     let menor = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < menor) {
//             menor = array[i]
//         }
//     }

//     return menor
// }

// console.log(obtenerMenor(edades))


// function obtenerMayor(array) {
//     let mayor = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > mayor) {
//             mayor = array[i]
//         }
//     }

//     return mayor
// }

// console.log(obtenerMayor(edades))

// function promedioEdades(array) {
//     let sumatoria = 0;
//     for (let i = 0; i < array.length; i++) {
//         sumatoria += array[i]
//     }
//     return sumatoria / array.length
// }

// console.log(promedioEdades(edades))

// function incrementarEdades(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i]++
//     }
//     return array
// }

// console.log(incrementarEdades(edades))

// Excelente, ahora, como ya trabajamos un array, sabemos que este puede tener como elemento cualquier 
// tipo de dato —Number, String, Objetos Literales, Array, etc—. Para continuar con la Mesa de Trabajo trabajaremos con un array de objetos 
// literales, para ello invitamos a repasar la clase de Objetos Literales para tener en claro su estructura y sintaxis. 
// Podemos decir que un objeto literal es una colección de propiedades y cada propiedad es una asociación entre una clave y un valor.

/*
 Observamos que es un array por su sintaxis que comienza y termina con corchetes []
   y sus elementos tienen la sintaxis de objetos literales {}
   Entonces, podemos decir que tenemos una array de objetos literales, 
   o una colección de objetos literales
// */
// const arrayDeObjetosLiterales =
//     [
//         {},
//         {},
//         {},
//         {}
//     ];

// Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal. 
// A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada
const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: "$3,253.40",
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: "$3,229.45",
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: "$1,360.19",
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: "$3,627.12",
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: "$1,616.52",
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: "$1,408.68",
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]
console.log(arrayCuentas)
// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

function cuentasMenores30(array) {
    let cMenores30 = [];
    for (let i = 0; i<array.length; i++){
        if(array[i].edadTitular < 30){
            cMenores30.push(array[i])
        }
    }

    return console.log(cMenores30)

}

cuentasMenores30(arrayCuentas)

// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
// Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
// Obtener la cuenta con el titular de la misma más joven.
// Obtener un nuevo array por cada tipo de cuenta.

// Obtener un nuevo array con las cuentas habilitadas.
// Obtener un nuevo array con las cuentas deshabilitadas.
// Obtener la cuenta con el menor saldo.
// Obtener la cuenta con el mayor saldo.
 


