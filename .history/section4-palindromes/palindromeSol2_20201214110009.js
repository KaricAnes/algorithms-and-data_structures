// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//every: turn string into array and then use this every helper on it 
//every je array helper kao sto je i reduce

const palindrome = (str) => {
  const reversedString = str.split("").reverse().join("");
  return str === reversedString; //returns true or false
};

console.log(palindrome("abbca"));
