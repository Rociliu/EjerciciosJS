"use strict";
let input = document.querySelector('.value');

input.addEventListener("input", inputValue); 

function inputValue (event){
    let inputValue = event.target.value;
    console.log(inputValue);
}
//imprime en consola el valor del input por cada tecla pulsada