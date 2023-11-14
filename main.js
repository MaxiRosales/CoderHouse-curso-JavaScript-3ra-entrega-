const productos = [
    { id: 1, marca: "Chevrolet", modelo: "Corsa",categoria:"vehiculos", imagen:"./assets/vehiculos/corsa.jpg", precio: 4000000 },
    { id: 2, marca: "Chevrolet", modelo: "Cruze Premium",categoria:"vehiculos", imagen:"./assets/vehiculos/cruze.jpg", precio: 20500000 },
    { id: 3, marca: "Chevrolet", modelo: "Celta 2013",categoria:"vehiculos", imagen:"./assets/vehiculos/celta.jpg", precio: 4000000 },
    { id: 4, marca: "Chevrolet", modelo: "Aveo",categoria:"vehiculos", imagen:"./assets/vehiculos/aveo.jpg", precio: 4500000 },
    { id: 5, marca: "Volkswagen", modelo: "Gol 2016",categoria:"vehiculos", imagen:"./assets/vehiculos/gol.jpg", precio: 7900000 },
    { id: 6, marca: "Volkswagen", modelo: "Vento Advance 2016",categoria:"vehiculos", imagen:"./assets/vehiculos/vento.jpg", precio: 10000000 },
    { id: 7, marca: "Volkswagen", modelo: "Suran 2014",categoria:"vehiculos", imagen:"./assets/vehiculos/suran.jpg", precio: 7500000 },
    { id: 8, marca: "Volkswagen", modelo: "Up 2018",categoria:"vehiculos", imagen:"./assets/vehiculos/up.jpg", precio: 8000000 },
    { id: 9, marca: "Fiat", modelo: "Argo 2023",categoria:"vehiculos", imagen:"./assets/vehiculos/argo.jpg", precio: 9500000 },
    { id: 10, marca: "Fiat", modelo: "Palio Adventure 2009",categoria:"vehiculos", imagen:"./assets/vehiculos/palio.jpg", precio: 4200000 },
    { id: 11, marca: "Fiat", modelo: "Cronos Premium 2021",categoria:"vehiculos", imagen:"./assets/vehiculos/cronos.jpg", precio: 9800000 },
    { id: 12, marca: "Fiat", modelo: "Duna 1997",categoria:"vehiculos", imagen:"./assets/vehiculos/duna.jpg", precio: 150000 },
    { id: 13, marca: "Renault", modelo: "Clio 2007",categoria:"vehiculos", imagen:"./assets/vehiculos/clio.jpg", precio: 3300000 },
    { id: 14, marca: "Renault", modelo: "Sandero stepway",categoria:"vehiculos", imagen:"./assets/vehiculos/sandero.jpg", precio: 8500000 },
    { id: 15, marca: "Renault", modelo: "Capture intense",categoria:"vehiculos", imagen:"./assets/vehiculos/capture.jpg", precio: 1100000 },
    { id: 16, marca: "Renault", modelo: "Duster Dakar 2017",categoria:"vehiculos", imagen:"./assets/vehiculos/duster.jpg", precio: 10200000 },
    { id: 17, marca: "Ford", modelo: "Focus 2016",categoria:"vehiculos", imagen:"./assets/vehiculos/focus.jpg", precio: 10300000 },
    { id: 18, marca: "Ford", modelo: "Ecosport 2014",categoria:"vehiculos", imagen:"./assets/vehiculos/ecosport.jpg", precio: 4200000 },
    { id: 19, marca: "Ford", modelo: "Fiesta Kinetic 2011",categoria:"vehiculos", imagen:"./assets/vehiculos/fiesta.jpg", precio: 7500000 },
    { id: 20, marca: "Ford", modelo: "Ka 2010",categoria:"vehiculos", imagen:"./assets/vehiculos/ka.jpg", precio: 4000000 },
    // accesorios    
    { id:21, nombre:"Aceite Castrol 5w30",categoria:"accesorios", imagen:"./accesorios/aceite castrol.jpg", precio: 2600 },
    { id:22, nombre:"Aceite Fercol 10w40",categoria:"accesorios", imagen:"./accesorios/aceite fercol.jpg", precio: 1200 },
    { id:23, nombre:"Sellador Cerámico MrFix",categoria:"accesorios", imagen:"./accesorios/auto ceramic.jpg", precio: 11600},
    { id:24, nombre:"Cargador de Bateria Sparco",categoria:"accesorios", imagen:"./accesorios/cargador de bateria.jpg", precio: 33000},
    { id:25, nombre:"Funda de Asiento momocorse",categoria:"accesorios", imagen:"./accesorios/cubreasientos azul.jpg", precio: 20000},
    { id:26, nombre:"Funda de Asiento Eco-cuero",categoria:"accesorios", imagen:"./accesorios/cubreasientos ecocuero.jpg", precio: 19400},
    { id:27, nombre:"Funda de Asiento laufer",categoria:"accesorios", imagen:"./accesorios/cubreasientos.jpg", precio: 21000},
    { id:28, nombre:"Luces Led p/ interior",categoria:"accesorios", imagen:"./accesorios/leds.jpg", precio:6700},
    { id:29, nombre:"Stereo JDS-520",categoria:"accesorios", imagen:"./accesorios/stereo.jpg", precio: 17250},
    { id:30, nombre:"Limpia parabrisas Fercol",categoria:"accesorios", imagen:"./accesorios/limpiaparabrisas.jpg", precio:1600}  
];

const contenedorProductos = document.querySelector(".contenedor-productos");


function cargarProductos(){

    productos.forEach(producto =>{
        const div = document.createElement("div"); 
        div.classList.add("producto");
       if(producto.categoria === "vehiculos"){ div.innerHTML =`
        <img class="producto-imagen" src="${producto.imagen}">
        <div class="productos-detalles">
            <h3 class="producto-nombre">${producto.marca} - ${producto.modelo} </h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar">Consultar</button>
        </div>
        `;
        contenedorProductos.append(div)
    }})
}
cargarProductos();

/* <div class="producto-div">
                <img class="producto-imagen" src="./assets/Vehiculos/argo.jpg">
                <div class="productos-detalles">
                    <h3 class="producto-nombre">nombre del vehiculo</h3>
                    <p class="producto-precio">precio</p>
                    <button class="producto-agregar">Consultar</button>
                </div>
            </div> */