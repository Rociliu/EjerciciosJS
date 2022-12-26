"use strict";

const toys= [
    {id: 5, name: "Buzz Year"},
    {id: 40, name: "Gato felix"},
    {id: 40, name: "Gato con guantes"},
    {id: 11, name: "Action mann"},
    {id: 23, name: "Barbie mann"}
    
]

for(let i=toys.length-1; i>=0; i--){
    if(toys[i].name.includes("Gato")){
        toys.splice(i,1);
    }
}
console.log(toys);