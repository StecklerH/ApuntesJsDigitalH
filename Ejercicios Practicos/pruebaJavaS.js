const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");



var name = prompt("Ingrese su nombre")

console.log(miFunucion());

function miFunucion(name,lastname,nickname){
    completeName = `${name} ${lastname}`;
    return `Mi nombre es: ${completeName}, pero prefiero que me digas ${nickname}`;
}


