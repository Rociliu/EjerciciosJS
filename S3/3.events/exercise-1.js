"use strict";
//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
let button = document.getElementById("btnToClick");
button.addEventListener("click", () => {
    console.log("Has hecho click"); //Cuando hago click se imprime el mensaje
})