// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es un array?
// ¿Qué es un objeto?
// ¿Cuándo es mejor usar objetos o arrays?
// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


// 2️⃣ Crea una función que pueda recibir cualquier array 
//como parámetro e imprima su primer elemento.

let lista1 = ["Manzana", "Platano", "Cereza", "Fresa"];

function PrimerValorArray(){
    return lista1[0];
}

console.log(PrimerValorArray());

// 3️⃣ Crea una función que pueda recibir cualquier array 
//como parámetro e imprima todos sus elementos uno por uno 
//(no se vale imprimir el array completo).

let lista1 = ["Manzana", "Platano", "Cereza", "Fresa"];

let array = [];
let ImprimeElementos = function(array){
    for(i = 0; i >= array.length; i++){
        console.log("Elemento en posicion" + array[i]);
    }
}

ImprimeElementos(lista1);