"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColors(name) {
//     if (name === "blue") {
//         return "Nice " + name + " is my favorite!"
//     } else if (name === "red") {
//         return "Nice I could deal with some" + name
//     } else if (name === "green") {
//         return "Ahh green like the grass"
//     } else {
//         return 'I dont know what to say about that ' + name
//     }
// }
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColors(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColors(name) {

    switch (name){
        case "blue":
            return "Blue is my favorite color";
        case "red":
            return "Red is a a awesome color";
        case  "green":
                return "Ahh green like the grass!"
        default:
            return "I dont know about " + name;
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
var name = prompt("Whats your favorite color?")
alert (analyzeColors(name))
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//function named calculate total
// promotion at walmart generates random number between o-5
//if 0 no discount
//if 1 get 10% discount
//if 2 get 25%
//if 3 35
//if 4 50
//if 5 everything for free
function calculateTotal(luckyNum, fullPrice) {
    if (luckyNum === 0){
        return fullPrice
    }else if (luckyNum === 1){
        return fullPrice - (fullPrice * .1);
    }else if (luckyNum === 2){
        return fullPrice - (fullPrice * .25);
    }else if (luckyNum === 3){
        return fullPrice - (fullPrice * .35);
    }else if (luckyNum === 4){
        return fullPrice - (fullPrice * .50);
    }else if (luckyNumb === 5){
        return "Everything is FREE!!"
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("What was your total bill?")
alert ("Your luck number was " + luckyNumber + " and your total bill was " + totalBill + " which means you only pay $ " + calculateTotal(luckyNumber, totalBill))
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var wantstogiveNumber = confirm("hello do you want to give a number?");

if (wantstogiveNumber){

    var userNumber = parseInt(prompt("Okay what number ar you gonna give me?"));

    if(isNaN(userNumber !== "number")){
        alert("Not a number please correct that!")
    } else {
        alert("Okay thank you for putting " + userNumber );
    }

    var isEven = userNumber % 2 === 0;
    var addOneHundred = userNumber + 100;
    var isPositive = userNumber >= 0;

    alert("It is " + isEven + " that your number is even.");
    alert("Here is your number with 100 added: " + addOneHundred);
    alert ("It was " + isPositive + " that your number was positive.");
}
