"use strict";
const users = [
    {id: 1, name: 'Abel'}, 
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'}, 
    {id:4, name: 'Amanda'}
];
let names = users.map(users => users.name);
console.log(names);
