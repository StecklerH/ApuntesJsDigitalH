
var jugador1 = "piedra";
var jugador2 = "papel";
var numero;
if (jugador1 === "piedra" && jugador2 === "tijera") {
    numero = 1;
} else if (jugador1 === "papel" && jugador2 === "piedra") {
    numero = 2;
} else if (jugador1 === "tijera" && jugador2 === "papel") {
    numero = 3;
} else if (jugador1 === jugador2) {
    numero = 4;
}
else {
    numero = 5;
}

switch (numero) {
    case 1:
        console.log("Gana el jugador 1");
        break;
    case 2:
        console.log("Gana el jugador 1");
        break;
    case 3:
        console.log("Gana el jugador 1");
        break;
    case 4:
        console.log("Empate");
        break;
    default: console.log("gana Jugador 2");
}

var jugador1 = "papel";
var jugador2 = "tijera";
var numero;

resultado (jugador1,jugador2);

function resultado(jugador1, jugador2) {
    if (jugador1 === "piedra" && jugador2 === "tijera") {
        numero = 1;
    } else if (jugador1 === "papel" && jugador2 === "piedra") {
        numero = 1;
    } else if (jugador1 === "tijera" && jugador2 === "papel") {
        numero = 1;
    } else if (jugador1 === jugador2) {
        numero = 4;
    }
    else {
        numero = 5;
    }

    return numero;
}
switch (numero) {
    case 1:
        console.log("Gana el jugador 1");
        break;
    case 4:
        console.log("Empate");
        break;
    default: console.log("gana Jugador 2");
}