"use strict";

var userInput;
while(true){
    var userInput = Number(prompt("Please enter your favorite odd number between 1 and 50"));
    if(userInput % 2 ===1 && userInput >=1 && userInput <= 50){
        break;
    }
}

for(var i = 1; i <= 50; i +=2){
    if(i === userInput) {
        console.log("Yikes! Skipping number " + i);
        continue;
    }
    console.log("Here is an odd number " + i);
}