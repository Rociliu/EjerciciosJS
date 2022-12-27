"use strict";
let myArray = ['Rosa', 'Lirio', 'Margarita', 'Amapola', 'Gardenia', 'Azahar', 'Narciso', 'Jazmin'];

function findArrayIndex(myArray, text) {
    let position = myArray.indexOf(text);
    return position;
}


function removeItem(myArray, text) {
    return findArrayIndex(myArray, text)
    }

let removeText = removeItem(myArray, 'Gardenia');
console.log(removeText);
myArray.splice(removeText,1);
console.log(myArray);


