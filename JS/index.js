let sectionProductos = document.getElementById("section-productos");
let sectionCarrito = document.getElementById("section-carrito");

let carrito = cargarCarrito();

let totalCompra = document.createElement("div");
totalCompra.innerHTML = "<h2>Total de tu compra: $</h2>";
sectionCarrito.appendChild(totalCompra);

let montoTotalCompra = document.createElement("h2");
montoTotalCompra.innerText = "0";
totalCompra.appendChild(montoTotalCompra);

let cantidadProductos = document.createElement("div");
cantidadProductos.innerHTML = "<h3>Cantidad de productos: </h3>";
sectionCarrito.appendChild(cantidadProductos);

let cantProductos = document.createElement("h3");
cantProductos.innerText = "0";
cantidadProductos.appendChild(cantProductos);

let botonFinalizar = document.createElement("button");
botonFinalizar.innerText = "Finalizar compra";
sectionCarrito.appendChild(botonFinalizar);
botonFinalizar.setAttribute("class", "boton");

botonFinalizar.onclick = () => {
  const precioFinal = montoTotalCompra.innerText;
  Swal.fire({
    title: '¿Terminaste de elegir tus productos?',
    text: `Total de tu compra: $${precioFinal}`,
    showCancelButton: true,
    confirmButtonColor: '#008f39',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Pedido confirmado',
      )
    }
  })
}


for (const producto of productos) {
    let container = document.createElement("div");
    container.setAttribute("class", "card-product");
    container.innerHTML = ` 
    <div class="info-producto">
    <p class="font">${producto.nombre}</p>
    <strong class="font">$${producto.precio}</strong>
    <button class="boton" id="btn${producto.id}"> Agregar al carrito </button>
    </div>`;
    sectionProductos.appendChild(container);

    
    document.getElementById(`btn${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);
  }

 
function agregarAlCarrito(id) {
    carrito.push(productos.find(p => p.id == id));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotalCarrito();
  }
function calcularTotalCarrito() {
    let total = 0;
    for (const cantProductos of carrito) {
      total += cantProductos.precio;
    }
    montoTotalCompra.innerText = total;
    cantProductos.innerText = carrito.length;
  }

 function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    if (carrito == null) {
      return [];
    } else {
      return carrito;
    }
  }