"use strict";
function reverseString(str) {
    return str.split('').reverse().join('');
}
const original = "TypeScript";
const reversed = reverseString(original);
console.log(reversed);
