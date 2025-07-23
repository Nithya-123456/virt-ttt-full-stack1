"use strict";
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("malayalam"));
console.log(isPalindrome("sairam"));
