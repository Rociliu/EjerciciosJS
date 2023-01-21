/*Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

````js
function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

getCharacters();*/
const getCharacters = async () => {
    const response = await fetch ('https://rickandmortyapi.com/api/character');
    const res = await response.json();
    console.log(res);
}
getCharacters();


////////otra forma de hacerlo:////////////////////////
// async function getCharacters () { 
// const URL = 'https://rickandmortyapi.com/api/character';
// const response = await fetch (URL);
// const res = await response.json();
// console.log(res);
// }
// getCharacters()