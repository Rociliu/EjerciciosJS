"use strict";
const users = [
    {id:1, name: 'Abel'}, 
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'}, 
    {id:4, name: 'Amanda'}
];
let usuarios = users.map((x) => {//puedo poner cualquier parámetro; "x", "y", "nombre"...
    if (x.name[0] === 'A') {//Si la primera posicion de name es A (si empieza por a)
        x.name = 'Anacleto' //Cambio el valor completo a 'Anacleto'
    }
        return x
})
console.log(usuarios);
//console.log(users);
//ESTUDIAR ESTO BIEN... NO SÉ POR QUÉ MODIFICA EL ARRAY ORIGINAL "USERS"


