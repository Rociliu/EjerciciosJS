"use strict";
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

 const container = document.querySelector('[data-function="printHere"]');
 const ulList = document.createElement('ul');
 const items = document.createElement('li');
 for (let car of cars) {
     const items = document.createElement('li');
     items.innerText = car;
     ulList.append(items);
 }
 container.append(ulList);


//Otra forma de hacerlo:
 let contenedor = document.querySelector('[data-function="printHere"]');
 let listaUl = document.createElement('ul');
 let listItem = '';
 cars.forEach((item) => {
     listItem += `<li>${item}</li>`
 })
 listaUl.innerHTML = listItem;
 contenedor.appendChild(listaUl);
