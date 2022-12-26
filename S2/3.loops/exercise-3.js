"use strict";
const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 41, name: 'Santander'}, 
    {id: 40, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}]; 

for (let i = placesToTravel.length-1; i>=0; i--) {  //--> se pone .length -1 porque la i empieza en cero
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i,1);
    }
}

console.log(placesToTravel);