let productosEnCarrito = localStorage.getItem("productos-en-carrito");
    productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#contenedor-carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciarCarrito = document.querySelector(".boton-vaciar");
const totalCarrito = document.querySelector("#total");
const botonPagar = document.querySelector(".carrito-pagar");

function mostrarProductosEnCarrito() {
    contenedorCarritoProductos.innerHTML = "";

    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-imagen" src="${producto.imagen}">
                <div class="carrito-producto-nombre">
                    <small>Título</small>
                    <h3>${producto.nombre}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
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
            contenedorCarritoProductos.append(div);
        });
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
    }
    actualizarBotonesEliminar();
    actualizarTotal();
}

mostrarProductosEnCarrito();


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click", eliminarDelCarrito)
    });
}

function eliminarDelCarrito(e){
    const idBoton = parseInt(e.currentTarget.id);
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    mostrarProductosEnCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

botonVaciarCarrito.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    Swal.fire({
        title: "Estás seguro?",
        text: "Se eliminarán todos los productos del carrito",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Vacia el carrito"
      }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito = [];
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            mostrarProductosEnCarrito(); 
          Swal.fire({
            title: "Carrito vaciado",
            icon: "success"
          });
        }
      });
    
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio + producto.cantidad), 0);
    totalCarrito.innerText =`$${totalCalculado}`;
}

botonPagar.addEventListener("click", PagarCarrito);

function PagarCarrito() {
    productosEnCarrito = [];
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    mostrarProductosEnCarrito(); 
    Swal.fire({
        icon: "success",
        title: "Muchas Gracias!",
        text: "Que disfrute de su compra",
      });
}