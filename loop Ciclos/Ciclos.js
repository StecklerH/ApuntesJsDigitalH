// ciclos o loop

//ciclo for
var estudiantes = ["Hugo", "Maria", "Sergio", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

//

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiantes);
}
