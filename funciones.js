
document.getElementById('botonAniadir').addEventListener('click', aniadirProductos);
document.getElementById('filtro').addEventListener('change', filtrarProductos);
/**
 * Función `añadirProducto(nombre,precio,descripción,imagen)` 
 * que añade un nuevo producto a la variable `productos`.
 **/
let productos=[];
function aniadirProductos(){
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').valueAsNumber;
    let imagen = document.getElementById('imagen').value;
    let descripcion = document.getElementById('descripcion').value;
    productos.push({nombre, precio, imagen, descripcion});
    mostrarProductos(productos);
}
/**
 * Función `eliminarProducto()` que elimina dicho producto de la variable
 *  `productos`.
 * **/
function eliminarProducto(posicion){
    productos.splice(posicion, 1);
    mostrarProductos(productos);
}

function filtrarProductos(){
    let filtro = document.getElementById('filtro').value;
    let arrayFiltrado = productos.filter((producto) => producto.nombre.includes(filtro));
    mostrarProductos(arrayFiltrado);
}

/**
 * Función `mostrarProductos()` encargada de modificar el HTML y 'pintar' 
 * tantos productos como elementos tenga el array `productos`, cada uno de ellos
 *  con sus datos correspondientes
 */

function mostrarProductos(listaProductos){
    let contenido="";
    let precio=0;
    document.getElementById('listadoProductos').innerHTML= contenido;
    document.getElementById('total').innerHTML=precio;
    for(let i=0;i<listaProductos.length;i++){
        if(listaProductos[i].length != 0){
            contenido = contenido.concat("<div class='producto'>");
            contenido = contenido.concat("<div class='columnaProducto1'>");
            contenido = contenido.concat(`<img src='${listaProductos[i].imagen}'`).concat("'>");
            contenido = contenido.concat("</div>");
            contenido = contenido.concat("<div class='columnaProducto2'>");
            contenido = contenido.concat("<h2>").concat(listaProductos[i].nombre).concat("</h2>");
            contenido = contenido.concat("<p>").concat(listaProductos[i].descripcion).concat("</p>");
            contenido = contenido.concat("</div>");
            contenido = contenido.concat("<div class='columnaProducto3'>");
            contenido = contenido.concat("<h2>").concat(listaProductos[i].precio).concat(" € </h2>");
            contenido = contenido.concat("<button type='button' onclick='eliminarProducto(").concat(""+i).concat(")'>Eliminar</button>");
            contenido = contenido.concat("</div>");
            contenido = contenido.concat("</div>");
            
            precio = precio + listaProductos[i].precio;   
        }
    }
    document.getElementById('listadoProductos').innerHTML =contenido;
    document.getElementById('total').innerHTML=precio + " €";
}

