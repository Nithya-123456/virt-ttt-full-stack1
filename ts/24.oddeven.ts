function isEven(n: number): boolean 
{
  return n % 2 === 0;
  
}

function isOdd(n: number): boolean {
  return n % 2 !== 0;
}
console.log("the number is even:",isEven(45)); // false
console.log(isOdd(2));  // false
console.log(isEven(8)); // true
