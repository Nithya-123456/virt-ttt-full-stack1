"use strict";
//How do you find the count for the occurrence of a particular character in a string?
function countChar(str, char) {
    return str.split(char).length - 1;
}
console.log(countChar("Anna University", "n")); //output 3..split n and count the length
