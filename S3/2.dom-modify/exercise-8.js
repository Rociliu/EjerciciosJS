"use strict";
//Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const divs = document.querySelectorAll('div');
const secondDiv = divs[1];

const phrase = document.createElement('p');
phrase.innerText = "Voy en medio";
document.body.insertBefore(phrase, secondDiv);
