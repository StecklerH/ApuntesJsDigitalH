// Ejercicios
// A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

// const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


// Obtener en un nuevo array las edades menores a 18.
// Obtener en un nuevo array las edades mayor o igual a 18.
// Obtener en un nuevo array las edades igual a 18.
// Obtener el menor.
// Obtener el mayor. 
// Obtener el promedio de edades.
// Incrementar en 1 todas las edades.

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

function nuevoArreglo(array) {
    let menores18 = []
    let mayores18 = []
    let iguales18 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 18) {
            menores18.push(array[i])
        } else if (array[i] > 18) {
            mayores18.push(array[i])
        } else {
            iguales18.push(array[i])
        }
    }

    return "los menores a 18 son: " + menores18.length +" los mayores a 18 son: " +  mayores18.length +" los iguales a 18 son: "+ iguales18.length;
}

console.log(nuevoArreglo(edades))


