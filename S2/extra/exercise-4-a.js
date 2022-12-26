"use strict";
let myArray = ['Rosa', 'Lirio', 'Margarita', 'Amapola', 'Gardenia', 'Azahar'];

function findArrayIndex(myArray, text) {
    let position = myArray.indexOf(text);
    return position;
}
let positionText = findArrayIndex(myArray, 'Azahar');
console.log("El texto está en la posición "+ positionText);