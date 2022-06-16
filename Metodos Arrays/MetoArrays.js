//metodos para recorrer un array 
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

//filter nos trae unu vrdadero y falso, y crea unu nuevo array

var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <=500
});

//Metodo de Map sirve para mapear y crea un nuevo array

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos

//metodo find() busca algo en el objeto
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

encuentraArticulo

//metodo forEach() filtra 

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//metodo  some() sirve para validar
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos

//
