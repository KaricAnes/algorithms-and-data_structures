// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
  let arrOfStrings = str.toLowerCase().split("");
  console.log(arrOfStrings);
  let counter = 0;
  for (let el of arrOfStrings) {
    if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
      counter++;
    }
  }
  return counter;
};

console.log(vowels("Why?"));
