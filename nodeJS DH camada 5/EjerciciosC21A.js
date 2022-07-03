// Programación Imperativa

// Ejercicios
// A partir de él siguiente array de edades nos solicitan realizar lo siguiente

const edades = [33, 27, 34, 30, 34, 25];


// Desarrollar una función que ordene internamente de forma ascendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
// [25, 27, 30, 33, 34, 34] de menor a mayor

function ascendente(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    return array
}

// console.log(ascendente(edades))

// Desarrollar una función que ordene internamente de forma descendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
// [34, 34, 33, 30, 27, 25]

function descendente(cervezas) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    return array
}

// console.log(descendente(edades))

// 3. A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:
const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

// Desarrollar una función que ordene internamente de forma ascendente según él saldo de cada cuenta, la misma deberá retornar él array ordenado .

function ordenAscendente(objeto) {

    for (let i = 0; i < objeto.length; i++) {
        for (let j = 0; j < objeto.length - 1; j++) {
            if (objeto[j].saldo < objeto[j + 1].saldo) {
                let temp = objeto[j]
                objeto[j] = objeto[j + 1]
                objeto[j + 1] = temp
            }
        }
    }

    return objeto


}

// console.log(ordenAscendente(arrayCuentas))

// Desarrollar una función que ordene internamente de forma ascendente según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado.

function ordenAscendenteEdad(objeto) {

    for (let i = 0; i < objeto.length; i++) {
        for (let j = 0; j < objeto.length - 1; j++) {
            if (objeto[j].edadTitular > objeto[j + 1].edadTitular) {
                let temp = objeto[j]
                objeto[j] = objeto[j + 1]
                objeto[j + 1] = temp
            }
        }
    }

    return objeto


}

// console.log(ordenAscendenteEdad(arrayCuentas))

// Ayuda: Utilizá Bubble Sort para todos los ejercicios.  






// Crear una función que imprima todos los dígitos decimales, del 0 al 9,
// usando un ciclo For.

function mostrarDecimales() {
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            console.log(i + "," + j);
        }
    }
}

// invoca tu funcion aqui
// console.log(mostrarDecimales());


// 2. Crear una función que imprima los números entre el 5 y el 20, saltando de
// tres en tres. https://codesandbox.io/s/mesa-21-ejercicio-2-3n0np

function salto3en3(num, num1) {
    for (let i = num; i <= num1; i += 3) {
        console.log(i)
    }
}

// salto3en3(5,20)

// 3. Crear una función que imprima la sumatoria de todos los números entre el
// 0 y el 100.
// https://codesandbox.io/s/mesa-21-ejercicio-3-zw962?file=/src/index.js

function sumatoria(num, num1) {
    let suma = 0
    for (let i = num; i <= num1; i++) {
        suma += i
    }
    return suma
}

// console.log(sumatoria(0,100))

// 4. Crear una función que reciba un string y luego imprimir la cantidad de
// vocales que se encuentran en dicha frase.
// https://codesandbox.io/s/mesa-21-ejercicio-4-x9frm?file=/src/index.js

function cuentaVocale(string) {
    let contVocales = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'a') {
            contVocales++
        } else if (string[i] == 'e') {
            contVocales++
        } else if (string[i] == 'i') {
            contVocales++
        } else if (string[i] == 'o') {
            contVocales++
        } else if (string[i] == 'u') {
            contVocales++
        }
    }

    return contVocales
}

// console.log(cuentaVocale('paradoja'))


// 5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// contenido sea igual a la original pero invertida.
// https://codesandbox.io/s/mesa-21-ejercicio-5-812tw?file=/src/index.js
let array = [1, 2, 3, 4, 5]

function invertirLista(array) {
    let listaInvertida = []
    for (let i = array.length - 1; i >= 0; i--) {
        listaInvertida.push(array[i])
    }
    return listaInvertida
}

// console.log(invertirLista(array))

// 6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
// forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// .......
// https://codesandbox.io/s/mesa-21-ejercicio-6-x10rx?file=/src/index.js

function piramide(num, num1) {
    let string1 = ''
    let string2 = ''

    for (let i = num; i <= num1; i++) {
        string1 += i
        for (let j = num; j <= i; j++) {
            string2 += string1
        }
        console.log(string2)
        string1 = ''
        string2 = ''
    }

}

  piramide(1, 9)