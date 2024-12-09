console.log("Inicio");
setTimeout(() => {
    console.log("Después de 3 segundos");
}, 5000); // 3000 milisegundos = 3 segundos
console.log("Fin");





console.log("OK");

const nombreUsuario = document.getElementById("nombre").value;

console.log(nombreUsuario);

const edadUsuario = parseInt(document.getElementById("edad").value);

const parrafoSaludo = document.getElementById("saludo");
//console.log(parrafoSaludo);

document.getElementById("saludo").innerText = "Hola " + nombreUsuario;

parrafoSaludo.innerText = "Hola " + nombreUsuario;

const mayorDeEdad = document.getElementById("mayorDeEdad");
//console.log(mayorDeEdad);
mayorDeEdad.innerText = "Tenés " + edadUsuario + " años";


console.log(edadUsuario >= 18); // a + b

const esMayor = document.getElementById("esMayor");

//esMayor.innerText = "Sos mayor de edad?: " + (edadUsuario >= 18);

console.log(edadUsuario)
console.log(typeof(edadUsuario))
console.log(parseInt(edadUsuario)) //NaN Not a number


const validarEdad = document.getElementById("validarEdad");

if(isNaN(edadUsuario)) {  //true o false
    validarEdad.innerText = "Ingrese un valor numérico";
} 
else {
    if (edadUsuario > 18 && edadUsuario < 41) {
        esMayor.innerText = "Tiene un 20% de descuento en Vinos";
    }
    else if (edadUsuario > 40) { 
        esMayor.innerText = "Tiene un 40% de descuento en Vinos";
    } 
    else {
        esMayor.innerText = "Sólo podés comprar agua y gaseosas";
    }
}



