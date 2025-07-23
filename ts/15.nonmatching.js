"use strict";
//How do you find the non-matching characters in a string?
//let a:string;
//let b:string;
function getNonMatchingChars(str, charToExclude) {
    return str.split('').filter(c => c !== charToExclude);
}
console.log(getNonMatchingChars("virtusa", "r"));
//output  [ 'v', 'i', 't', 'u', 's', 'a' ]
