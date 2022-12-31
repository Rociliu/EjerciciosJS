"use strict";
const flowers = ['Rosa', 'Lirio', 'Margarita', 'Amapola', 'Gardenia', 'Azahar', 'Narciso', 'Jazmin'];

function findArrayIndex(array, text) {
    let position = flowers.indexOf(text);
    return position;
}


function removeItem(array, text) {
    return findArrayIndex(array, text)
    }

let removeText = removeItem(flowers, 'Gardenia');
console.log("El elemento eliminado está en la posición: " + removeText);
flowers.splice(removeText,1);
console.log(flowers);


