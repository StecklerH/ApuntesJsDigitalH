const alicia = [10, 80, 75];
const bob = [90, 20, 25];

let concurso = {
    Etapas: [],
    ganador: "",
    encontrarGanador: function (array1, array2) {
        let puntosAlicia = 0;
        let puntosBob = 0;
        const cantidadEtapas=3;
        for (let i = 0; i < cantidadEtapas; i++) {
            if (array1[i] > array2[i]) {
                puntosAlicia++;
                this.Etapas[i] = "Ronda " + (i+1) +" Gano Alicia"; 
                // console.log("Punto para alicia, lleva un total de: " + puntosAlicia + " puntos")
            } else if (array1[i] === array2[i]) {
                this.Etapas[i] = "Ronda " + (i+1) +" Empate"; 
                // console.log("empate, ningun participante gana puntos");
            } else {
                puntosBob++;
                this.Etapas[i] = "Ronda " + (i+1) +" Gano Bob"; 
                // console.log("Punto para Bob, lleva un total de: " + puntosBob + " puntos")
            }
        }

        if (puntosAlicia > puntosBob) {
            // console.log("el ganador es Alicia con: " + puntosAlicia + " puntos")
            this.ganador = "Ganador alicia";
        } else if (puntosAlicia < puntosBob) {
            this.ganador = "Ganador Bob"
            // console.log("el ganador es Bob con: " + puntosBob + " puntos")
        } else {
            // this.ganador = "Empate"
            // console.log("Ambos participantes quedaron empatados")
        }
    },
    // exportarResultados: function(){
    //     console.log(this.Etapas);
    // }
}

concurso.encontrarGanador(alicia,bob)
console.log(concurso.ganador)
// concurso.exportarResultados();
// console.log(concurso.Etapas);

let json = JSON.stringify(concurso.Etapas);
