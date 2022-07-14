class Producto {
    constructor(nombre, codigo, precio, tipo, stock) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
        this.tipo = tipo;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
}
}

const lacteos = [];
const fiambres = [];
const reposteria = [];


lacteos.push(new Producto("Queso La Paulina xkg", 1, 550, "Queso", 10));


fiambres.push(new Producto("Mortadela Paladini xkg", 2, 4000, "Fiambre", 10));


reposteria.push(new Producto("Harina Industrial 000", 3, 2900, "Repo", 10));

for (const lacteo of lacteos) {
    alert("Codigo (" + lacteo.codigo + ") - " + lacteo.nombre);
}
for (const fiambre of fiambres) {
    alert("Codigo (" + fiambre.codigo + ") - " + fiambre.nombre);
}
for (const reposterias of reposteria) {
    alert("Codigo (" + reposterias.codigo + ") - " + reposterias.nombre);
}


let productoSeleccionado = parseInt(prompt("Ingrese el codigo del producto que desea comprar:"));
const lacteosFind = lacteos.find(lacteos => lacteos.codigo === productoSeleccionado);
const fiambresFind = fiambres.find(fiambres => fiambres.codigo === productoSeleccionado);
const reposteriaFind = reposteria.find(reposteria => reposteria.codigo === productoSeleccionado);


let cantidad = parseInt(prompt("Cantidad de unidades en numero"));

