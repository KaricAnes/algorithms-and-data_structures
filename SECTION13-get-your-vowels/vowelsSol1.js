// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
  let counter = 0;
  const checker = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      //jedno po jedno slovo cupamo iz stringa i gledamo je li ono postoji u checkeru
      //ako postoji uvecamo counter za jedan
      counter++;
    }
  }
  return counter;
};

console.log(vowels("Hi There!"));
