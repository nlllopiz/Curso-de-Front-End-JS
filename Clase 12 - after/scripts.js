console.log("Ok")

//colecciones o conjuntos de datos

//Arrays - Arreglos - vectores o matrices
let frutas = ["pera", "naranja", "banana", "frutilla", "uva"];

//let varios = ["cadena", 45, true, null, undefined] //no se recomienda

//let calificaciones = [10, 8.5, 6.25, 1.5]

console.log(frutas);

//mostrar todos los elementos del arreglo
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

//cantidad de elementos de un arreglo
console.log(frutas.length); //longitud - cantidad de elementos

//con for
for(let indice = 0; indice < frutas.length ; indice++){
    console.log(frutas[indice]);
}

//cambiar un elemento del array
frutas[2] = "pomelo";
console.log(frutas);

//buscar un elemento
const elementoBuscado = "pomelo";
for(let indice = 0; indice < frutas.length ; indice++){
    if(frutas[indice] === elementoBuscado){
        console.log("Elemento encontrado en la posición: " + indice);
        break;
    } else {
        console.log(elementoBuscado + " No está en la posición: " + indice);
    }
}

/** objetos en JS  */

const producto = {
    cod: 1578,
    nombre: "Curso de PHP",
    percio: 25300
}

console.log(frutas)
console.log(producto) //propiedad -> key - value / clave - valor

/** arreglos de objetos */

const productos = [
    {
        cod: 1,
        nombre: "Curso de PHP",
        descripcion: "asdfkasdfjñ kasdf askdlfj ñasd jaldsj alkdsf al ñsfdk",
        percio: 25300
    },
    {
        cod: 2,
        nombre: "Curso de Java",
        percio: 32000
    },
    {
        cod: 3,
        nombre: "Curso de JS",
        percio: 36000
    }
];