"use strict";
const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let totalScores = exams.reduce(function (accumulator, exam) {
    return accumulator + exam.score;}, 0);
console.log(totalScores);

//Si lo quisiera hacer con una función flecha:

let notasFinales = exams.reduce((acc, exam)=> acc + exam.score, 0);
console.log("La suma total de las notas finales es de: " + notasFinales);
