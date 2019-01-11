//Review on the bases of JavaScript.

var LOANAMT = parseInt(prompt("What is the outstanding amount of your loan?"));
var NUMMONTHS =  parseInt(prompt("How many months will it take you to pay off the loan?"));
var PAYMENT =  Math.round(LOANAMT / NUMMONTHS);

console.log("To pay off the loan of "  + LOANAMT + " it will take you " + NUMMONTHS + " monthly payments of $" + PAYMENT + ". (Not including interest!)" );