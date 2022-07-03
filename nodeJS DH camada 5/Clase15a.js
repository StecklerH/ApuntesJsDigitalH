// Holaa, alguno hizo este ejercicio de discord?
// /*
// Elements

// Escribí una función llamada Elements que tenga dos parámetros, en primer lugar un arreglo de objetos y ademas el 
//nombre de una propiedad. La función tendrá que devolver un arreglo que solamente contenga los valores dentro de la propiedad recibida.

// Utilizar la siguiente variable:

// let ecommerce = [{ nombre: "Samsung TV", precio: 6000}, { nombre: "DELL notbook", precio: 4000 }, {nombre:"Auriculares Sony", precio: 1500}, {nombre:"Monitor Philips", precio:12000}, {nombre:"Teclado logitech", precio: 3000}]

// Ejemplo: 

// Elements(ecommerce, 'nombre') // ["Samsung TV", "DELL notbook", "Auriculares Sony", "Monitor Philips", "Teclado logitech"]

let ecommerce = [
    { nombre: "Samsung TV", precio: 6000 },
    { nombre: "DELL notbook", precio: 4000 },
    { nombre: "Auriculares Sony", precio: 1500 }, 
    { nombre: "Monitor Philips", precio: 12000 },
    { nombre: "Teclado logitech", precio: 3000 }
]

function Elements(arrayOb, nombre) {
    let arreglo=[]
    for(let i = 0 ; i < arrayOb.length ; i++){
        arreglo.push(arrayOb[i][nombre])
    }

    return arreglo;
}

console.log(Elements(ecommerce,"nombre"))