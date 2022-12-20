"use strict";
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const newDiv3 = document.createElement("div");
document.body.append(newDiv3);
for(let i=1; i<7;i++){
    const texto2 = document.createTextNode("p");
    newDiv3.append(texto2);
}