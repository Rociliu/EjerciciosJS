"use strict";
/2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divInside = document.querySelectorAll('.fn-insert-here');

for (let i=0; i<divInside.length; i++){
    const phrase2 = document.createElement('p');
    phrase2.innerText = "Voy dentro";
    divInside[i].appendChild(phrase2);
   }