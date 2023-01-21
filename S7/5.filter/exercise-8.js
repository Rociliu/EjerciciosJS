const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


const input = document.querySelector('input[data-function="toFilterStreamers"]')
    input.addEventListener('input', function(event) {
        //console.log(filterStreamers(event.target.value));
    }
);

function filterStreamers(valor) {
    return streamers.filter(function (streamer) {
        return streamer.name.toLowerCase().includes(valor.toLowerCase());
    });
}

const button = document.querySelector('button[data-function="toShowFilterStreamers"]')
button.addEventListener('click', () => {
    console.log(filterStreamers(input.value, streamers));
    
})