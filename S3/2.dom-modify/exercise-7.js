"use strict";
// Elimina todos los nodos que tengan la clase .fn-remove-me
const parrafos = document.querySelectorAll('.fn-remove-me');
for(let i=0; i<parrafos.length; i++){
    parrafos[i].remove();
};
