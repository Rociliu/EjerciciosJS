"use strict";
let flowers = ['Rosa', 'Lirio', 'Margarita', 'Amapola', 'Gardenia', 'Azahar'];

function findArrayIndex(array, text) {
    let position = flowers.indexOf(text);
    return position;
}
let positionText = findArrayIndex(flowers, 'Azahar');
console.log("El texto está en la posición "+ positionText);