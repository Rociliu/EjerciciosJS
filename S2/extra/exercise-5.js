"use strict";

function rollDice(){
    let numAleatorio = Math.round(Math.random()*6); //Multiplico por 6 para que me de un num del 0 al 6
    return(numAleatorio);
}
console.log(rollDice());