console.log("Ok");

let nombre = "Juan";

let alumnos = ["Roxana", "Facundo", "Javier"];

let roxana = {
    nombre: "Roxana",
    apellido: "Perez",
    dni: 42345678,
    tieneLicencia: true
};

const producto1 = {
    nombre: "Curso PHP", //par clave-valor key-value llave-value
    precio: 1500
};

const producto2 = {
    nombre: "Curso Java", //par clave-valor key-value llave-value
    precio: 1800
};

//productos[1]
const productos = [
    {
        nombre: "Curso PHP", //par clave-valor key-value llave-value
        precio: 1500
    },
    {
        nombre: "Curso Java", //par clave-valor key-value llave-value
        precio: 1800
    }
]

productos[0].nombre = "Curso de JS";

console.log(productos);

function suma(numero1, numero2) {     //parámetros
    let resultado = numero1 + numero2;
    //...
    return resultado;
}

console.log(suma(10, 20)) //argumentos - valores

//event listener

const btnHacerClic = document.getElementById("btnHacerClic");

const lbClics = document.getElementById("lbClics");

let contador = 0; //ámbito global

function contarClics() {
    contador++;
    console.log(contador + "clics");
    lbClics.innerText = contador;
   
}

btnHacerClic.addEventListener("click", contarClics)

