"use strict";
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categoriesOfMovies = [];
for (let titles of movies){
    for (let i=0; i<titles.categories.length; i++) {
        if (!categoriesOfMovies.includes(titles.categories[i])) {
            categoriesOfMovies.push(titles.categories[i]);
        }
    }
}
console.log(categoriesOfMovies);
