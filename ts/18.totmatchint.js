"use strict";
//How do you total all of the matching integer elements in an array?
//Count the occurrences of each number.
//Keep only numbers that appear more than once.
//Sum those numbers (as many times as they appear).
//eg.[2,3,4,5,6,2,3,5]=ans:10
function sumOfMatchingElements(arr) {
    const countMap = {};
    // Count occurrences
    for (const num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }
    // Sum only numbers that occur more than once
    let total = 0;
    for (const num in countMap) {
        const count = countMap[num];
        if (count > 1) {
            total += parseInt(num) * count;
        }
    }
    return total;
}
console.log(sumOfMatchingElements([1, 5, 3, 5, 4, 3, 3]));
