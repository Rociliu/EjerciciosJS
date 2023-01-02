"use strict";
const cities = [
    {isVisited:true, name: 'Tokyo'}, 
    {isVisited:false, name: 'Madagascar'},
    {isVisited:true, name: 'Amsterdam'}, 
    {isVisited:false, name: 'Seul'}
];

let citiesName = cities.map((city) => {
//¿Es necesario crear una variable nueva para realizar el map????   
    if (city.isVisited ===true) {
        console.log(city.name + " (Visitado)");
    } else {
        console.log(city.name);
    }
    return city;
})
console.log(citiesName);
//No entiendo porqué, si creo la variable nueva, imprime el mismo array que el original
