"use strict";
//Crea un botón que elimine el último elemento de la lista.
const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(let photo of countries) {
    let divPhotos = document.createElement('div');
    divPhotos.innerHTML += `<h4>${photo.title}</h4>`;
    divPhotos.innerHTML += `<img src=${photo.imgUrl}/>`;
    document.body.append(divPhotos);
}
//El enunciado dice que hay que crear un botón pero en el archivo HTML ya venía creado. Sólo haré la función para que borre el último elemento:

let deleteBtn = document.querySelector('.delete');//->Accedo al elemento
deleteBtn.addEventListener('click',() => { //->Creo la función con un evento para que se ejecute cuando haga click
    let newDiv = document.querySelectorAll('div'); //->Creo una variable con todos los divs.Debe ir dentro de la función para que borre todos los elementos,como me explicó Jose.
    newDiv[newDiv.length - 1].remove()
});

//Si pongo newDiv fuera de la función sólo borraría el último elemento una vez, quedando 4 elementos en el navegador
