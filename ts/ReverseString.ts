function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
const original = "TypeScript";
const reversed = reverseString(original);
console.log(reversed);