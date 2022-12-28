"use strict";
let sum1 = () => {
    let a = 10;
    let b = 5;
    return a + b;
}
console.log("Función sin pasar ningún parámetro: " + sum1());

let sum2 = a => {
    let b = 5;
    return a + b;
}
console.log("Función pasando un sólo parámetro: "+ sum2(10));

let sum3 = (a, b) => a + b;
console.log("Función pasando dos parámetros: "+sum3(10, 5));