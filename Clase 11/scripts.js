console.log("OK")

const nombreUsuario = document.getElementById("nombre").value

console.log(nombreUsuario)

const edadUsuario = document.getElementById("edad").value
console.log(edadUsuario)

const parrafoSaludo = document.getElementById("saludo")
//console.log(parrafoSaludo)

parrafoSaludo.innerText = "Hola " + nombreUsuario

const mayorDeEdad = document.getElementById("mayorDeEdad")
//console.log(mayorDeEdad)
mayorDeEdad.innerText = "Tenés " + edadUsuario + " años"

console.log(edadUsuario >= 18) // a + b

const esMayor = document.getElementById("esMayor")

//esMayor.innerText = "Sos mayor de edad?: " + (edadUsuario >= 18)

if (edadUsuario > 18 && edadUsuario < 41) {
    esMayor.innerText = "Tiene un 20% de descuento en Vinos"
}
else if (edadUsuario > 40 && edadUsuario < 61) { //AND
    esMayor.innerText = "Tiene un 40% de descuento en Vinos"
} 
else {
    esMayor.innerText = "Sólo podés comprar agua y gaseosas"
}

// voy a tu casa en auto || en micro OR