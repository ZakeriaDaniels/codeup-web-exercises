"use strict";


console.log("Hello from external JavaScript");

alert("Welcome to my Website!");


let response = prompt("What is your favorite color?");
alert(" Great " + response + " is my favorite color too!")

let littlemermaid = prompt("How many days did you have the little mermaid for?")
let brotherbear = prompt("How many days did you have Brother Bear for?")
let hercules = prompt("How many days did you have Hercules for?")

let littlemermaidprice = (littlemermaid * 3)
//"Your total for little mermaid"
let brotherbearprice = (3 * brotherbear)
//"Your total for brotherbear")
let herculesprice = (hercules * 3)

let totalPrice;
totalPrice = (littlemermaidprice + brotherbearprice + herculesprice);
//"Your total for hercules")
alert("Your total price is $" + totalPrice)