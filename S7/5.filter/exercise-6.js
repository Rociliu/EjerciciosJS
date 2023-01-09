"use strict";
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let league = streamers.filter((gamer) => {
    if (gamer.gameMorePlayed.includes("Legends")){
        if (gamer.age > 35){
            gamer.gameMorePlayed = gamer.gameMorePlayed.toUpperCase();
        }
        return gamer;
    }
})
console.log(league);
