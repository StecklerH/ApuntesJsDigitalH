//Total a pagar
function totalAPagar(vehiculo, litrosConsumidos) {
    let totalAPagar = 0;
    switch (vehiculo) {
        case "coche":
            totalAPagar = litrosConsumidos * 86;
            break;
        case "moto":
            totalAPagar = litrosConsumidos * 70;
            break;
        case "autobus":
            totalAPagar = litrosConsumidos * 55;
    }

    litrosConsumidos < 25 ? totalAPagar += 50 : totalAPagar += 25;

    return console.log("El total a pagar es: $" + totalAPagar);
}

totalAPagar("moto", 60);

//Local de sandwiches

function totaladicionales(queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let total = 0;
    if (queso) {
        total += 20;
    }

    if (tomate) {
        total += 15;
    }

    if (lechuga) {
        total += 10;
    }

    if (cebolla) {
        total += 15;
    }
    if (mayonesa) {
        total += 5;
    }
    if (mostaza) {
        total += 5
    }

    return total;
}
function sandwiches(base, pan) {
    let totalAPagar = 0;
    switch (base) {
        case "pollo":
            totalAPagar += 150;
            break;
        case "carne":
            totalAPagar += 200;
            break;
        case "vegetariano":
            totalAPagar += 100;
        default:
            console.log("No quiere nada");
    }
    switch (pan) {
        case "blanco":
            totalAPagar += 50;
            break;
        case "negro":
            totalAPagar += 60;
            break;
        case "sin gluten":
            totalAPagar += 75;
        default:
            console.log("base sola");
    }


    return totalAPagar;
}




for (let i = 1; i <= 17; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FIZZBUZZ");
    } else if (i % 3 === 0) {
      console.log("FIZZ");
    } else if (i % 5 === 0) {
      console.log("BUZZ");
    } else {
      console.log(i);
    }
  }
  
  /*
    Venganza de FizzBuzz 
    
    Creá una función que tenga la misma funcionalidad que el FizzBuzz anterior, pero que reciba por parámetro las palabras a imprimir (en vez de Fizz y Buzz) y los números con los que se activan y el número máximo de iteraciones.
    Output esperado: fizzBuzz('DIGITAL', 'HOUSE', 2, 7, 17)
    
    1
    DIGITAL
    3
    DIGITAL
    5
    DIGITAL
    HOUSE
    ...
    DIGITALHOUSE
    15
    DIGITAL
    17    
    */
