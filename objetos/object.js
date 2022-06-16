// objetos sintaxis
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    //funcion que seria un metodo de objetos
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} annio ${this.annio}`);
    }
};

//forma de acceder a los objetos

miAuto.detalleDelAuto();
//prompt("Mensajes"); 