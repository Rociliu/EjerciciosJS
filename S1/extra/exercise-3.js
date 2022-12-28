"use strict";

const movies = [
{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
{name: "Origen", durationInMinutes: 165}, 
{name: "El señor de los anillos", durationInMinutes: 967}, 
{name: "Solo en casa", durationInMinutes: 214}, 
{name: "El jardin de las palabras", durationInMinutes: 40}
];

const shortMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (let film of movies){
    if (film.durationInMinutes < 100){
        shortMovies.push(film);
    } else if (film.durationInMinutes > 200){
        largeMovies.push(film);
    }else{
        mediumMovies.push(film)
    }
}

console.log("Películas de corta duración: ")
console.log(shortMovies);
console.log("Películas de media duración: ");
console.log(mediumMovies);
console.log("Películas de larga duración: ");
console.log(largeMovies);


