const productos = [
    { id: 1, nombre: "Chevrolet - Corsa",categoria:"vehiculos", imagen:"./assets/vehiculos/corsa.jpg", precio: 4000 },
    { id: 2, nombre: "Chevrolet - Cruze Premium",categoria:"vehiculos", imagen:"./assets/vehiculos/cruze.jpg", precio: 20500 },
    { id: 3, nombre: "Chevrolet - Celta 2013",categoria:"vehiculos", imagen:"./assets/vehiculos/celta.jpg", precio: 4000 },
    { id: 4, nombre: "Chevrolet - Aveo",categoria:"vehiculos", imagen:"./assets/vehiculos/aveo.jpg", precio: 4500 },
    { id: 5, nombre: "Volkswagen - Gol 2016",categoria:"vehiculos", imagen:"./assets/vehiculos/gol.jpg", precio: 7900 },
    { id: 6, nombre: "Volkswagen - Vento Advance 2016",categoria:"vehiculos", imagen:"./assets/vehiculos/vento.jpg", precio: 10000 },
    { id: 7, nombre: "Volkswagen - Suran 2014",categoria:"vehiculos", imagen:"./assets/vehiculos/suran.jpg", precio: 7500 },
    { id: 8, nombre: "Volkswagen - Up 2018",categoria:"vehiculos", imagen:"./assets/vehiculos/up.jpg", precio: 8000 },
    { id: 9, nombre: "Fiat - Argo 2023",categoria:"vehiculos", imagen:"./assets/vehiculos/argo.jpg", precio: 9500 },
    { id: 10, nombre: "Fiat - Palio Adventure 2009",categoria:"vehiculos", imagen:"./assets/vehiculos/palio.jpg", precio: 4200 },
    { id: 11, nombre: "Fiat - Cronos Premium 2021",categoria:"vehiculos", imagen:"./assets/vehiculos/cronos.jpg", precio: 9800 },
    { id: 12, nombre: "Fiat - Duna 1997",categoria:"vehiculos", imagen:"./assets/vehiculos/duna.jpg", precio: 1500 },
    { id: 13, nombre: "Renault - Clio 2007",categoria:"vehiculos", imagen:"./assets/vehiculos/clio.jpg", precio: 3300 },
    { id: 14, nombre: "Renault - Sandero stepway",categoria:"vehiculos", imagen:"./assets/vehiculos/sandero.jpg", precio: 8500 },
    { id: 15, nombre: "Renault - Capture intense",categoria:"vehiculos", imagen:"./assets/vehiculos/capture.jpg", precio: 11000 },
    { id: 16, nombre: "Renault - Duster Dakar 2017",categoria:"vehiculos", imagen:"./assets/vehiculos/duster.jpg", precio: 10200 },
    { id: 17, nombre: "Ford - Focus 2016",categoria:"vehiculos", imagen:"./assets/vehiculos/focus.jpg", precio: 10300 },
    { id: 18, nombre: "Ford - Ecosport 2014",categoria:"vehiculos", imagen:"./assets/vehiculos/ecosport.jpg", precio: 4200 },
    { id: 19, nombre: "Ford - Fiesta Kinetic 2011",categoria:"vehiculos", imagen:"./assets/vehiculos/fiesta.jpg", precio: 7500 },
    { id: 20, nombre: "Ford - Ka 2010",categoria:"vehiculos", imagen:"./assets/vehiculos/ka.jpg", precio: 4000 },
    // accesorios    
    { id: 21, nombre:"Aceite Castrol 5w30",categoria:"accesorios", imagen:"./assets/accesorios/aceite castrol.jpg", precio: 2600 },
    { id: 22, nombre:"Aceite Fercol 10w40",categoria:"accesorios", imagen:"./assets/accesorios/aceite fercol.jpg", precio: 1200 },
    { id: 23, nombre:"Sellador Cerámico MrFix",categoria:"accesorios", imagen:"./assets/accesorios/auto ceramic.jpg", precio: 11600},
    { id: 24, nombre:"Cargador de Bateria Sparco",categoria:"accesorios", imagen:"./assets/accesorios/cargador de bateria.jpg", precio: 33000},
    { id: 25, nombre:"Funda de Asiento momocorse",categoria:"accesorios", imagen:"./assets/accesorios/cubreasientos azul.jpg", precio: 20000},
    { id: 26, nombre:"Funda de Asiento Eco-cuero",categoria:"accesorios", imagen:"./assets/accesorios/cubreasientos ecocuero.jpg", precio: 19400},
    { id: 27, nombre:"Funda de Asiento laufer",categoria:"accesorios", imagen:"./assets/accesorios/cubreasientos.jpg", precio: 21000},
    { id: 28, nombre:"Luces Led p/ interior",categoria:"accesorios", imagen:"./assets/accesorios/leds.jpg", precio:6700},
    { id: 29, nombre:"Stereo JDS-520",categoria:"accesorios", imagen:"./assets/accesorios/stereo.jpg", precio: 17250},
    { id: 30, nombre:"Limpia parabrisas Fercol",categoria:"accesorios", imagen:"./assets/accesorios/limpiaparabrisas.jpg", precio:1600}  
];

const contenedorProductos = document.querySelector(".contenedor-productos");
const botonesMenu = document.querySelectorAll(".boton-menu");
const mainH2 = document.querySelector(".main-h2");
let botonesAgregar = document.querySelectorAll(".producto-agregar")


function cargarProductos(productos){

    contenedorProductos.innerHTML = "";

    productos.forEach(producto =>{
        const div = document.createElement("div"); 
        div.classList.add("producto");
        if(producto.id <= 20){
        mainH2.innerText = "Vehículos"
        div.innerHTML =`
        <img class="producto-imagen" src="${producto.imagen}">
        <div class="productos-detalles">
            <h3 class="producto-nombre">${producto.nombre} </h3>
            <p class="producto-precio">u$d ${producto.precio}</p>
            <button id="${producto.id}" class="producto-consultar">Consultar</button>
        </div>
        `;
    }else if(producto.id >= 21){
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
cargarProductos(productos);

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

const productosEnCarrito = [];

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