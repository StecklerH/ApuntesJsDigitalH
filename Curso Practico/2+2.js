
//ejercicio sin bucle
let respuesta = prompt("Cuanto es 2+2");
if (respuesta === "4") {
    console.log("Felicitaciones");
} else {
    console.log("Volvemos a intentar");
}

//tambien se puede hacer con el do while
let i=0;
do {
    let respuesta = prompt("Cuanto es 2+2");

    if (respuesta === "4") {
        i++;
        alert("Felicitaciones");
    } else {
        alert("Volvemos a intentar");
    }


} while (i < 1);



// solucion con el while 
let i=0;
while (i < 1){
    let respuesta = prompt("Cuanto es 2+2");
    if (respuesta === "4") {
        
        i++;
        alert("Felicitaciones");
    } else {
       
        alert("Volvemos a intentar");
    }
}