let productos = [];

fetch("./productos.json")
    .then(Response => Response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
        mainH2.innerText = "TODO EL CATÁLOGO";
    })

const contenedorProductos = document.querySelector(".contenedor-productos");
const botonesMenu = document.querySelectorAll(".boton-menu");
const mainH2 = document.querySelector(".main-h2");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const botonesConsultar = document.querySelectorAll(".producto-consultar")

function cargarProductos(productos){

    contenedorProductos.innerHTML ="";

    productos.forEach(producto =>{
        const div = document.createElement("div"); 
        div.classList.add("producto");
        if(producto.categoria === "vehiculos"){
        mainH2.innerText = "Vehículos"
        div.innerHTML =`
        <img class="producto-imagen" src="${producto.imagen}">
        <div class="productos-detalles">
            <h3 class="producto-nombre">${producto.nombre} </h3>
            <p class="producto-precio">u$d ${producto.precio}</p>
            <button id="${producto.id}" class="producto-consultar">Consultar</button>
        </div>
        `;
    }else if(producto.categoria === "accesorios"){
        mainH2.innerText = "Accesorios"
        div.innerHTML =`
        <img class="producto-imagen" src="${producto.imagen}">
        <div class="productos-detalles">
            <h3 class="producto-nombre">${producto.nombre} </h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button id="${producto.id}" class="producto-agregar">Agregar</button>
        </div>
        `;
    }
    contenedorProductos.append(div)
    })    
    actualizarBotonesAgregar();
}

botonesMenu.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonesMenu.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active");

        const productosBoton = productos.filter(producto => producto.categoria === e.currentTarget.id);
        cargarProductos(productosBoton);

    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito)
    });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
}else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    const idBoton = parseInt(e.currentTarget.id)
    const productoAgregado = productos.find(productos => productos.id === idBoton);

    if(productosEnCarrito.some(producto =>producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function BotonesConsultar() {
    const botonesConsultar = document.querySelectorAll(".producto-consultar");
    
    botonesConsultar.forEach(boton => {
        boton.addEventListener("click", abrirEnlace);
    });

    function abrirEnlace() {
        const url = "./formulario.html";
        const enlace = document.createElement("a");
        enlace.href = url;
        enlace.target = "_blank";
        enlace.click();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    BotonesConsultar();
});