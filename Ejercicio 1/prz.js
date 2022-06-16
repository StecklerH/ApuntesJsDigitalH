var jugador1= "piedra";
var jugador2= "papel";

if (jugador1 === "piedra" && jugador2 === "tijera"){
    console.log("gana el jugador 1 con" + " " + jugador1);
}else if (jugador1 === "papel" && jugador2 === "piedra"){
    console.log("gana el jugador 1 con" + " " + jugador1);
}else if(jugador1 === "tijera" && jugador2 === "papel"){
    console.log("gana el jugador 1 con" + " " + jugador1);
}else {
    console.log("gana el jugador 2 con" + " " + jugador2);
}