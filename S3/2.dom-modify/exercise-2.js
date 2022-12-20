"use strict";
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDiv2 = document.createElement("div");
document.body.append(newDiv2);
const texto = document.createTextNode("p");
newDiv2.append(texto);