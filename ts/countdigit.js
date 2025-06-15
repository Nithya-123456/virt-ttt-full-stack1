"use strict";
function countDigit(str) {
    const digits = str.match(/\d/g); // \d=>to identify the digit 0–9,g  for global search
    return digits ? digits.length : 0; //ternary operator expression if digit=null return 0 ,not retrun =length of the digit
}
console.log(countDigit("virtusa12345")); // 5
console.log(countDigit("India")); //0
console.log(countDigit("In34dia1")); //2
