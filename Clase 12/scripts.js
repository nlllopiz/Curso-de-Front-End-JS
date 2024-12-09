/*
El valor que tomamos de un input o del prompt es de tipo string
Para poder trabajarlo como número tenemos que convertirlo
a entero con la función parseInt("cadena"), 
o a número con decimales, con parseFloat("cadena").
"cadena" es un string que sólo contiene números como "23" o "2.5".
Si cadena fuera "veinte" el resultado de la conversión
es NaN (Not a Number)
*/

//le pedimos al usuario que ingrese su edad
const edadUser = parseInt(prompt("Cuántos años tienes"));
//si el valor es no es una edad válida
if(edad < 0 || edad > 120 || isNaN(edad)) {
    console.log("Ingrese un valor correcto para su edad");
}
//sino el valor es una edad válida
else {
    console.log("La edad es correcta");
}


/*
Queremos darle al usuario varias oportunidades para que 
ingrese una edad correcta.
Para repetir una acción usamos las estructura de repetición:
while, do while y for
*/

// *** while - no sabemos de antemano cuántas veces se va a repetir
let edad;  //undefined
//mientras no sea una edad válida repetimos
while(edad < 0 || edad > 120 || isNaN(edad)) {
   edad = parseInt(prompt("Edad")); 
   console.log(edad);
   //si la edad no es válida mostramos un mensaje
   if(edad < 0 || edad > 120 || isNaN(edad)){
        console.log("Ingrese un valor correcto para su edad");
   }   
}
//cuando la edad sea válida deja de repetir
console.log("La edad es correcta");

// *** do while - no sabemos de antemano cuántas veces se va a repetir
//hacer
do {
   edad = parseInt(prompt("Edad")); //36
   console.log(edad);   
   if(edad < 0 || edad > 120 || isNaN(edad)){
        console.log("Ingrese un valor correcto para su edad");
   }
} while(edad < 0 || edad > 120 || isNaN(edad)) //mientras la edad no sea válida 
//cuando la edad sea válida deja de repetir
console.log("La edad es correcta");

//*** for - sí sabemos cuántas veces vamos a repetir
/*
Por ejemplo, le vamos a dar al usuario sólo 3 posibilidades
de ingresar una edad válida
*/

//necesitamos un contador
contador = 1
contador = contador + 1 //incremento en 1
contador++ //incremento en 1 forma simplificada
contador = contador + 5  // incremento en 5
contador += 5 //incremento en 5 forma simplificada

//repetimos mientras el contador sea menor que 4
//es decir, hasta 3
for(let contador = 1; contador < 4; contador++){
    edad = parseInt(prompt("Edad")); //hola
    console.log(edad);   
    if(edad < 0 || edad > 120 || isNaN(edad)){
         console.log("Ingrese un valor correcto para su edad");
    } else {
        console.log("La edad es correcta");
        break;
    }
}
