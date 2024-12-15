console.log("ok");

const productos = [
    {
        nombre: "Python",
        descripcion: "Obcaecati magnam error maxime eligendi doloremciteue voluptatibus nam laudantium corporis.",
        imagen: "imagenes/team-nocoloco-LWFdfx-5oEE-unsplash.jpg",
        precio: 2500
    },
    {
        nombre: "PHP",
        descripcion: "Neciteue magnam tenetur nam modi repellat vitae odio citeuam ipsam citeuaerat esse officiis.",
        imagen: "imagenes/team-nocoloco-OX1TXahR7Ng-unsplash.jpg",
        precio: 2300
    },
    {
        nombre: "Node.JS",
        descripcion: "Unde dolorum labore ipsa citeuos tempora non aspernatur citeuidem molestiae ratione.",
        imagen: "imagenes/team-nocoloco-U6L073YlbMo-unsplash.jpg",
        precio: 2400
    },
    {
        nombre: "Java",
        descripcion: "Praesentium veritatis molestiae debitis alias itaciteue illum assumenda dolor citeuae.",
        imagen: "imagenes/team-nocoloco-OX1TXahR7Ng-unsplash.jpg",
        precio: 2750
    }
]

console.log(productos[3].nombre)
/*
let saludo = "Hola " + nombre + apellido //concatenación
***podemos hacer esto con interpolación: me permite insertar la variable en la cadena sin concatenar
se usa el tilde inclinado a la izquierda, en lugar de las comillas
let saludo2 = `Hola ${nombre} ${apellido}` //interpolación
*/
//creamos una variable que va a contener todos los cards
//de los productos, pero ahora con los datos del arreglo
let cursosHTML = "";
for(let indice = 0; indice < productos.length; indice++){
    //creamos una cadena con interpolación para incorporar los datos del arreglo
    //en cada repetición, con += concatenamos cada nueva cadena a la anterior
    //ustedes adapten el html de este ejemplo por sus propio código
    cursosHTML += ` 
                <div class="curso">
                    <img src=${productos[indice].imagen}
                        alt="foto de una página web para crear sitios web">
                    <div class="curso-contenido">
                        <h2>${productos[indice].nombre}</h2>
                        <h3>Precio: $${productos[indice].precio}</h3>
                        <p>${productos[indice].descripcion}</p>
                        <a href="">Ver + info</a>
                        <input id="boton-agregar-carrito" type="button" value="Agregar al carrito">
                    </div>
                </div>
    `;
}

console.log(cursosHTML);
const contenedorCursos = document.getElementById("contenedorCursos");
//reemplazamos el contenido del div #contenedorCursos
contenedorCursos.innerHTML = cursosHTML;
