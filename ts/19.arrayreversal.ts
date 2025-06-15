//How do you reverse an array?

const array1 = [12, 2, 13, 14, 5];
const revers = array1.slice().reverse(); // Use slice() to avoid modifying the original

console.log(revers); // [5,1 4,13, 2, 12]