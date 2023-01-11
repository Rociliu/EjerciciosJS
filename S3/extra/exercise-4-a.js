"use strict";
//Dado el siguiente array de objetos. 
//Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo 
//y otro elemento img para la imagen. 


const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
//Si quiero hacer una lista de divs por cada elemento, debo crear los divs dentro del bucle:
for (let photo of countries) {
    let divPhotos = document.createElement('div');
    divPhotos.innerHTML += `<h4>${photo.title}</h4>`;
    divPhotos.innerHTML += `<img src=${photo.imgUrl}/>`;
    document.body.append(divPhotos);
}
//----------------------------------------------------------------------------------------//
/*Creando la variable fuera del bucle, me crea un sólo div:

let unSoloDiv = document.createElement('div');
for (let photo of countries) {
    unSoloDiv.innerHTML += `<h4>${photo.title}</h4>`;
    unSoloDiv.innerHTML += `<img src='${photo.imgUrl}'/>`;
}
document.body.appendChild(unSoloDiv);*/
//---------------------------------------------------------------------------------------//

//Prueba para ver si innerHTML funciona en una sóla línea:
// unSoloDiv.innerTTML += `<h4>${photo.title}</h4> <img src='${photo.imgUrl}'/>`;


