const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");

if(productosEnCarrito){

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");

    contenedorCarritoProductos.innerHTML= "";

    productosEnCarrito.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("carrito-producto")
        div.innerHTML= `
        <img class="carrito-imagen" src="${producto.imagen}">
            <div class="carrito-producto-nombre">
                <small>titulo</small>
                <h3>${producto.nombre}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
            <small>Precio:</small>
            <p>${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal:</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>
        `;
    }
    )
    
}else{

}