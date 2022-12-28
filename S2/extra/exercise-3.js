"user strict";
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]





// let volumeSounds = [] //Saco todos los valores de volume y los meto en este array
// for (let user of users) {
//     for (let sound in user.favoritesSounds) {
//         //console.log(user.favoritesSounds[sound]);
//         volumeSounds.push(user.favoritesSounds[sound].volume)
//     }
// }
// console.log(volumeSounds);


// let totalVolume = 0;
// //hago la media usando el array que he creado
//     for (let i = 0; i < volumeSounds.length; i++) {
//         totalVolume = (totalVolume + volumeSounds[i])
//         //console.log(totalVolume)
//     }
// let mediaVolume = totalVolume/volumeSounds.length;
// console.log("La media del volumen de los sonidos favoritos es de: ");
// console.log(mediaVolume);