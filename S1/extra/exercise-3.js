"use strict";

const movies = [
{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
{name: "Origen", durationInMinutes: 165}, 
{name: "El señor de los anillos", durationInMinutes: 967}, 
{name: "Solo en casa", durationInMinutes: 214}, 
{name: "El jardin de las palabras", durationInMinutes: 40}];

const shortMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (let film of movies){
    if (film.durationInMinutes<100){
        shortMovies.push(film.name, film.durationInMinutes);
    } else if (film.durationInMinutes>200){
        largeMovies.push(film.name, film.durationInMinutes);
    }else{
        mediumMovies.push(film.name, film.durationInMinutes)
    }
}
console.log("Películas de corta duración: " + shortMovies);
console.log("Películas de media duración: " + mediumMovies);
console.log("Películas de larga duración: " + largeMovies);


