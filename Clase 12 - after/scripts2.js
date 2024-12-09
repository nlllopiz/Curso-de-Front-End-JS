//***Estructuras de datos

//Hasta ahora vimos que una Variable guarda un único valor
//Peeeero... podemos trabajar con conjuntos de valores

//****Colecciones o conjuntos de valores (string, number, boolean)

//** Arrays o arreglos
//crear un array o arreglo
const frutas = [];
frutas[0] = "pera";
frutas[1] = "manzana";
frutas[2] = "naranja";
console.log(frutas); //par clave-valor


//o asignando los valores en la definición
const frutas2 = ["pera", "manzana", "naranja"];

//agregar elementos
frutas[3] = "uva" //si conocemos la cantidad de elementos
frutas.push("sandía"); //agregar al final
console.log(frutas);

frutas.unshift("melón"); //agregar al principio
console.log(frutas);

//modificar elementos
frutas[1] = "frutilla";
console.log(frutas);

//eliminar elementos
frutas.splice(2, 1); //indice, cantidad a eliminar desde el índice

//los arreglos pueden contener distintos tipos de datos (no se recomienda!)
const varios = ["string", 20, true, 5.8, null, undefined];

//mostrar elementos de un arreglo, de a uno
console.log("Mostrar elementos de un arreglo, de a uno")
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

//los arreglos tienen un métodos para saber la cantidad de elementos que contiene
console.log("Cantidad de elementos del arreglo: " + frutas.length);

//mostrar todos los elementos con for
console.log("Mostrar todos los elementos con for");
for(let indice = 0; indice < frutas.length; indice++) {
    console.log(frutas[indice]);
}

//o se puede usar una versión simplificada de for para arreglos
//for...of
console.log("Con for...of")
//En cada repetición se guarda cada elemento del arreglo en la variable del for
//No hace falta indicar el incremento porque pasa de un elemento a otro del arreglo
for(let fruta of frutas) {
    console.log(fruta);
}

//buscar un elemento en el arreglo
const elementoBuscado = "pomelo";
for(let indice = 0; indice < frutas.length ; indice++){
    //comparo si el elemento del array es igual al elemento buscado
    if(frutas[indice] === elementoBuscado){
        //Si encontré el elemento buscado guardo su índice
        const indiceElementoBuscado = indice;
        console.log("Elemento encontrado en la posición: " + indiceElementoBuscado);
        //Corto las repeticiones porque ya encontré el elemento
        break;
    } else {
        console.log(elementoBuscado + " No está en la posición: " + indice);
    }
}

//** Arreglo de arreglos (matriz)
const listaDeCompras = ["pan", "leche", "shampoo", "naranjas", "jabón", "crema"];
console.log(listaDeCompras);

const listaDeComprasCategorias = [
    ["Alimentos", "pan", "leche", "naranjas"],
    ["Higiene", "shampoo", "jabón", "crema"]
];
console.log(listaDeComprasCategorias);

//mostrar los elementos
for(lista of listaDeComprasCategorias) {
    for(itemEnLista of lista) {
        console.log(itemEnLista);
    }
}

//** Objeto en JavaScript
const producto1 = {
    cod: 1,              //propiedad: es un par "clave: valor" (key-value)
    nombre: "Curso PHP",
    precio: 3500
}

//mostrar todas las propiedades del objeto
for(let key in producto1) {
    console.log(key + ": " + producto1[key]);
}


//** Arreglo de objetos
const productos= [
    {
        cod: 1,
        nombre: "Curso PHP",
        precio: 3500
    }, 
    {
        cod: 2,
        nombre: "Curso Java",
        precio: 3700
    }, 
]

console.log(productos)

//mostrar todos los productos del arreglo
for(let producto of productos){
    for(let clave in producto){
        console.log(clave + ": " + producto[clave])
    }
}

/*
Objeto de JavaScript        JSON (JavaScript Object Notation)
{                           {
    cod: 1,                     "cod": 1,
    nombre: "Curso PHP",        "nombre": "Curso PHP",
    precio: 3500                "precio": 3500
}                           }
*/