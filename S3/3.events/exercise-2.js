"use strict";
let input = document.querySelector(".focus");
input.addEventListener("focus", focusInput); 

function focusInput(event){
    let focusValue = event.target.value;
    console.log(focusValue);
}

