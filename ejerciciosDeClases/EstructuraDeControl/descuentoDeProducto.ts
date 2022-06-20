//desarrolle un algoritmo que diga el precio de una compla,
//la compra se compone del precio del producto y de la cantidad,
//si el cliente gasta más de 1000 debemos descontar 10 %//

let valorProducto: number = Number(prompt("INGRESE EL PRECIO DEL PRODUCTO"));
let cantidad: number = Number(prompt("INGRESE LA CANTIDAD"));
let gastoTotal: number = valorProducto * cantidad;
let productosTotales: number = gastoTotal * 0.01;
let descuento: number = gastoTotal - productosTotales;

if (gastoTotal >= 1000) {
  console.log(
    "EL VALOR DE SUS PRODUCTOS CON EL 10% DE DESCUENTO ES DE:",
    descuento
  );
} else {
  console.log("EL VALOR DE SUS PRODUCTOS SIN DESCUENTO ES DE", gastoTotal);
}
