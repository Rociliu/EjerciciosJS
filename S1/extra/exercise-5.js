"use strict";

const products = [
{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Impar de zapatos', sellCount: 6}];

let suma = 0;
let totalProducts = 0;
for (let i=0; i<products.length; i++){
    suma = suma + products[i].sellCount;
    totalProducts = products.length;
}
let promedio = suma / totalProducts;
console.log("El promedio de ventas es de: " + promedio);
