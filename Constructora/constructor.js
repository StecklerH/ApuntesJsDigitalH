//contructor de objetos o funcion constructora
function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo= modelo;
    this.annio=annio;
}

var autoNuevo = new auto("Tesla","Model 3",2020);

var autoNuevoDos = new auto("Tesla", "Modelo X",2018);
var autoNuevoTres = new auto("Toyota","Corolla",2020);

autoNuevoDos
autoNuevoTres


var miAuto = {
    marca: "toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} annio ${this.annio}`);
    }
}
