"use strict";
// Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement("ul");
const listItem = document.createElement("li");
listItem.innerText = apps[0];
lista.append(listItem);
for (let i=1; i<apps.length; i++){
    const listItem = document.createElement("li");
    listItem.innerText = apps[i];
    lista.append(listItem);
    
}
document.body.append(lista);
