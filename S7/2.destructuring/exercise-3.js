"use strict";
const animalFunction = () => {
    return {name: 'Bengal Tiger', 
            race: 'Tiger'}
};
let {name, race} = animalFunction();
console.log("name: "+name);//no entiendo por qué sale tachado
console.log("race: "+race);

