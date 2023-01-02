"use strict";

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let oldest = ages.filter(function(index){
    return index > 18;
})
console.log(oldest);

//CON ARROW FUNCTION:
let youngest = ages.filter (index => index < 18);
console.log(youngest);