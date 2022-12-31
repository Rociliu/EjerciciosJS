"use strict";
const car = {
    name: 'Mazda 6', 
    itv: [2015, 2011, 2020]
}
let {name, itv} = car;
console.log(`El modelo del vehículo es ${name}`);
console.log(`Las revisiones se han pasado en ${itv}`);
let[year1, year2, year3] = itv;
console.log(year1, year2, year3);