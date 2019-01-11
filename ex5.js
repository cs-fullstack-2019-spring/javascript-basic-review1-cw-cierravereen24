//Review on the bases of JavaScript.
// Write a JavaScript program that does the following:
// Prompts the User to enter their outstanding loan amount as a number (```LOANAMT```)
// * Prompts the User to enter the number of months in which they want to pay off the loan (```NUMMONTHS```)
// * Calculates the monthly payment they need to make and logs it to the console as ```To pay of a loan of LOANAMT it will take NUMMONTHS months```
do
    {
    var LOANAMT = parseInt(prompt("What is the outstanding amount of your loan?"));
}
 while (isNaN(LOANAMT));

do {
    var NUMMONTHS = parseInt(prompt("How many months will it take you to pay off the loan?"));
}
 while (isNaN(NUMMONTHS));

var PAYMENT =  Math.round(LOANAMT / NUMMONTHS);

console.log("To pay off the loan of "  + LOANAMT + " it will take you " + NUMMONTHS + " monthly payments of $" + PAYMENT + ". (Not including interest!)" );