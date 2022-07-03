// metodo Bubble sort

let numeros = [6, 5, 1, 2, 4, 3, 8, 7];

// todo de nuevo.En código, esto se ve así:
for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        
        if (numeros[j] > numeros[j + 1]) {
            
            
            let temp = numeros[j];

            numeros[j] = numeros[j + 1];

            numeros[j + 1] = temp;

        }
    }
}


