"use strict";
//Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


for(let photo of countries) {
    let divPhotos = document.createElement('div');
    divPhotos.innerHTML += `<h4>${photo.title}</h4> <img src=${photo.imgUrl}>`;
    
    let deletePhoto = document.createElement('button');
    deletePhoto.innerText = 'REMOVE';//Añado un nombre al botón que he creado
    deletePhoto.addEventListener('click', () => {
        divPhotos.remove();//Borra las fotos
        deletePhoto.remove();//Borra el botón "REMOVE", para que no sigua apareciendo en el navegador
    })                      
    document.body.appendChild(divPhotos);
    document.body.appendChild(deletePhoto);
}

//Para el botón que borra el último elemento, añado una nueva variable para que borre la img y el btn "REMOVE":
let deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click',() => { 
    let newDiv = document.querySelectorAll('div');
    newDiv[newDiv.length - 1].remove();
    let newbtn = document.querySelectorAll('button');//Nueva variable para borrar el btn "REMOVE"
    newbtn[newbtn.length -1].remove();
});






