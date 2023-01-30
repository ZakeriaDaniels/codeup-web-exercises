"use strict";

var i = 2;
while(i <= 65536){
    console.log(i);
    i *= 2;
}

var cones = Math.floor((Math.random()* 50) + 50)

do{
    var conesBought =  Math.floor((Math.random()* 4) + 1);

    if(conesBought < cones){
        console.log(conesBought + " cones that were bought....");
        cones -= conesBought;
    } else if (conesBought > cones){
        console.log("Cant sell you");
    } else {
        console.log("Yay! I sold them all! ")
        cones =- conesBought;
    }
}while(cones > 0)