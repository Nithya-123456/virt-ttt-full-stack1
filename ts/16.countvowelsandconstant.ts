
//How do you calculate the number of vowels and consonants in a string?

function countVowelsConsonants(str: string): { vowels: number; consonants: number } {
  const vowelsList = "aeiou";
  let vowels = 0;
  let consonants = 0;

  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];
    if (char >= "a" && char <= "z") {
      if (vowelsList.indexOf(char) !== -1) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return { vowels, consonants };
}



console.log(countVowelsConsonants("Beautyful world"));

//output  { vowels: 5, consonants: 9 }