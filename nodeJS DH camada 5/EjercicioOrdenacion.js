
let personas = [
    {
        nombre: "Dua",
        apellido: "Lipa",
        ocupacion: "cantante",
        estatura: 173
    },
    {
        nombre: "Ariana",
        apellido: "Grande",
        ocupacion: "cantante",
        estatura: 160
    },
    {
        nombre: "Taylor",
        apellido: "Swift",
        ocupacion: "cantante",
        estatura: 180
    }
];

function ordenar(array){
    for(let i=0 ; i<array.length ; i++){
        for(let j= 0 ; j<array.length - 1 ; j++){
            if(array[j].estatura > array[j + 1].estatura){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+i] = temp
            }
        }
    }

    return array
}

console.log(ordenar(personas))


// //Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let ConcursoFoto = [
    {
        username: "Hugo",
        like: 14
    
    },
    {
        username: "Gabi",
        like: 23
    
    },
    {
        username: "Mica",
        like: 2
    
    },
    {
        username: "Maria",
        like: 45
    
    },
    {
        username: "Ana",
        like: 134
    
    }
]

function ordenar(array){
    for(let i=0 ; i<array.length ; i++){
        for(let j = 0 ; j<array.length - 1; j++){
            if(array[j].like < array[j+1].like){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }

    return array
}


console.log(ordenar(ConcursoFoto))
// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.


let meteorológico = [
    {
        dia: 2 ,
        mes: 1 , 
        tempMaxima: 18 ,
        tempMinima: 12
    },
    {
        dia: 3 ,
        mes: 3 , 
        tempMaxima: 15 ,
        tempMinima: 3
    },
    {
        dia: 4 ,
        mes: 5 , 
        tempMaxima: 18 ,
        tempMinima: 4
    },
    {
        dia: 6 ,
        mes: 4 , 
        tempMaxima: 16 ,
        tempMinima: 2
    },
    {
        dia: 2 ,
        mes: 6 , 
        tempMaxima: 36 ,
        tempMinima: 30
    },
    {
        dia: 23 ,
        mes: 3 , 
        tempMaxima: 28 ,
        tempMinima: 20
    },
    {
        dia: 25 ,
        mes: 12 , 
        tempMaxima: 38 ,
        tempMinima: 10
    }
]

function servicioMetorologicoMayor(array){

    for(let i = 0 ; i< array.length ; i++){
        for(let j = 0 ; j <array.length - 1 ; j++){
            if(array[j].tempMaxima < array[j+1].tempMaxima){
                let temp = array[j]
                array[j]= array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}
function servicioMetorologicoMenor(array){

    for(let i = 0 ; i< array.length ; i++){
        for(let j = 0 ; j <array.length - 1 ; j++){
            if(array[j].tempMinima > array[j+1].tempMinima){
                let temp = array[j]
                array[j]= array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

function servicioMetorologicoDias(array){

    for(let i = 0 ; i< array.length ; i++){
        for(let j = 0 ; j <array.length - 1 ; j++){
            if(array[j].dia < array[j+1].dia){
                let temp = array[j]
                array[j]= array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

function servicioMetorologicoMeses(array){

    for(let i = 0 ; i< array.length ; i++){
        for(let j = 0 ; j <array.length - 1 ; j++){
            if(array[j].mes > array[j+1].mes){
                let temp = array[j]
                array[j]= array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

console.log(servicioMetorologicoMayor(meteorológico))
console.log(servicioMetorologicoMenor(meteorológico))
console.log(servicioMetorologicoDias(meteorológico))
console.log(servicioMetorologicoMeses(meteorológico))
