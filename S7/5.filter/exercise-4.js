"use strict";
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const leagueYoungest = streamers.filter((gamer) => {
    if(gamer.age < 30 && gamer.gameMorePlayed === "League of Legends"){
        return gamer
    }
})
console.log(leagueYoungest);