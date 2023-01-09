"use strict";
//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const lista = document.createElement ('ul');
for (let country of countries) {
    let listItem = document.createElement ('li');
    listItem.innerHTML = country;
    lista.append(listItem);
}
document.body.append (lista);
